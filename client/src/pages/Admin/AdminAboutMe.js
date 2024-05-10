import React from 'react'
import { Form , Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading} from '../../redux/rootSlice'
import axios from 'axios'

function AdminAboutMe() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish= async(values)=> {
        try {
            const tempSkills = values.skills.split(" , ");
            values.skills = tempSkills;
            dispatch(ShowLoading());
            const response = await axios.post('/api/portfolio/update-aboutme', {
                ...values,
                _id: portfolioData.aboutme._id
            });
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
            }else{
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }
  return (
    <div>
        <Form onFinish={onFinish} layout='vertical' 
        initialValues={{
          ...portfolioData.aboutme,
          skills: portfolioData.aboutme.skills.join(' , ')
        }}>
            <Form.Item name='lottieURL' label='Lottie URL' >
                <Input placeholder='Lottie URL' />
            </Form.Item>
            <Form.Item name='description1' label='Description 1'>
                <Input placeholder='Description 1' />
            </Form.Item>
            <Form.Item name='description2' label='Description 2'>
                <Input placeholder='Description 2' />
            </Form.Item>
            <Form.Item name='skills' label='Skills'>
                <textarea placeholder='Skills' />
            </Form.Item>
            <div className="flex justify-end w-full" label='Welcome Text'>
                <button className='px-10 py-2 bg-secondary text-primary' type='submit'>Save</button>
            </div>
        </Form>

    </div>
  )
}

export default AdminAboutMe