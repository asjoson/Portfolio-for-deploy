import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message, Input } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminEducation() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const  educations  = portfolioData?.education || [];
  const [ showAddEditModal, setShowAddEditModal ] = React.useState(false);
  const [ selectedItemForEdit, setSelectedItemForEdit ] = React.useState(null);
  const [type, setType ] = React.useState("add");
  const [ form ] = Form.useForm();
   

  const onFinish = async(values) => {
    try {
      dispatch(ShowLoading());
      let response
      if(selectedItemForEdit)
      {
        response = await axios.post("/api/portfolio/update-education", {
          ...values,
          _id: selectedItemForEdit._id
        });
      } else {
        response = await axios.post("/api/portfolio/add-education", values)
      }
      dispatch(HideLoading());
      if(response.data.success){
          message.success(response.data.message);
          setShowAddEditModal(false);
          setSelectedItemForEdit(null);
          dispatch(HideLoading());
          dispatch(ReloadData(true));
          form.resetFields();
      }else{
          message.error(response.data.message);
      }
  } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
  }
  }

  const onDelete = async(item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-education", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
        dispatch(HideLoading())
        message.error(error.message);
    }
  }

  return (
    <div>
      <div className="flex justify-end">
        <button className='bg-secondary px-5 py-2 text-white mb-5'
        onClick={() => {
          setSelectedItemForEdit(null);
          setShowAddEditModal(true);
        }}>
          Add Education
        </button>
      </div>
      <div className='grid grid-cols-3 gap-5 sm:grid-cols-1'>
          {educations.map((education) => (
            <div className='text-secondary shadow border p-5 border-gray-400 flex flex-col gap-5'>
                <h1 className='text-tertiary text-xl font-bold'>{education.title}</h1>
                <hr />
                <img src={education.image} alt="edupic" className='h-60 w-80' />
                <h1>{education.title}</h1>
                <h1>{education.description}</h1>
                <div className="flex justify-end gap-4 mt-5">
                  <button className="bg-secondary text-primary px-5 py-2"
                    onClick={() => {
                      onDelete(education);
                    }}
                  >Delete</button>
                  <button className="bg-tertiary text-primary px-5 py-2"
                    onClick={() => {
                      setSelectedItemForEdit(education);
                      setShowAddEditModal(true);
                      setType("edit");
                    }}
                  >Edit</button>
                </div>
            </div>
          ))}
      </div>
      {
        (type === "add" ||
        selectedItemForEdit) && 
        <Modal visible={showAddEditModal}
        title = {selectedItemForEdit ? "Edit Education" : "Add Education"}
        footer={null}
        onCancel={() => {
         setShowAddEditModal(false);
         setSelectedItemForEdit(null);
        }}
       >
         <Form 
         form={form}
         layout="vertical" onFinish={onFinish}
         initialValues={{
          title: selectedItemForEdit ? selectedItemForEdit.title : '',
          image: selectedItemForEdit ? selectedItemForEdit.image : '',
          description: selectedItemForEdit ? selectedItemForEdit.description : '',
        }}
         >
           <Form.Item name='title' label='Title'>
             <Input placeholder='Title' />
           </Form.Item>
           <Form.Item name='image' label='Image URL'>
             <Input placeholder='Image' />
           </Form.Item>
           <Form.Item name='description' label='Description'>
             <textarea placeholder='Description' />
           </Form.Item>
           <div className="flex justify-end gap-3 mt-2 my-3">
             <button className='bg-secondary px-5 py-2'
             onClick={() => {
              setShowAddEditModal(false);
              setSelectedItemForEdit(null);
             }}>Cancel</button>
             <button className='bg-primary text-white px-5 py-2'
             onClick={() => {
               setShowAddEditModal(false);
             }}>
               {selectedItemForEdit ? "Update" : "Add" }
             </button>
           </div>
         </Form>
       </Modal>
      }
    </div>
  )
}

export default AdminEducation