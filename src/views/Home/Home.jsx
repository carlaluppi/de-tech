import React from 'react'
import Navbar from '../../components/layout/navigation/Navbar/Navbar';
import Form from '../../components/layout/organization/Form';
import Footer from '../../components/layout/navigation/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home;