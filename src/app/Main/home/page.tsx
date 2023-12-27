import React from 'react'
import NavbarTop from '../components/navbar'
import FakeBar from '../components/dropDown'
import Sidebar from '../components/sidebar'
import Project from '../projects/page'
const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full'>
        <NavbarTop />

      </div>
      <div className=' w-full flex flex-row'>
        <div className='w-1/6'>
          <Sidebar/>
        </div>
        <div className='w-5/6'>
          <Project/>
        </div>

      </div>
    </div>
        
    
    
  )
}

export default Home