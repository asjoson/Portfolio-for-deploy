import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import Header from '../../components/Header';
import Footer from '../../pages/Home/Footer'
import AdminIntro from './AdminIntro';
import AdminAboutMe from './AdminAboutMe';
import AdminExperience from './AdminExperience';
import AdminProjects from './AdminProjects';
import AdminEducation from './AdminEducation';
import AdminContact from './AdminContact';
import { useSelector } from 'react-redux';


const { TabPane } = Tabs;

function Admin() {
  const {portfolioData} = useSelector((state) => state.root);

  useEffect(() => {
    
    if(!localStorage.getItem("token")){
      window.location.href = "/admin-login"
    }

  }, [])
  


  return (
    <div className='bg-primary px-40'>
      <Header />
      <div className='flex gap-10 items-center px-5 py-2 justify-between'>
        <div>
        <h1 className='text-2xl px-5 py-2 text-secondary'>Portfolio Admin</h1>
        </div>
        <h1 className='text-secondary underline text-xl cursor-pointer'
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login"
          }}
        >Logout</h1>
      </div>
      
      {portfolioData && <div className='px-5 text-secondary'>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Intro" key="1">
          <AdminIntro />
        </TabPane>
        <TabPane tab="About Me" key="2">
          <AdminAboutMe />
        </TabPane>
        <TabPane tab="Experiences" key="3">
          <AdminExperience />
        </TabPane>
        <TabPane tab="Projects" key="4">
          <AdminProjects />
        </TabPane>
        <TabPane tab="Education" key="5">
          <AdminEducation />
        </TabPane>
        <TabPane tab="Contact" key="6">
          <AdminContact />
        </TabPane>
      </Tabs>
      <Footer />
      </div>}
    </div>
  );
}

export default Admin;
