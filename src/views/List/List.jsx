import React from 'react'
import Navbar from '../../components/layout/navigation/Navbar/Navbar';
import Footer from '../../components/layout/navigation/Footer/Footer';
import ListDate from '../../components/layout/organization/ListDate/ListDate';
import SelectForm from '../../components/layout/organization/SelectForm/SelectForm';


const List = () => {
  return (
    <div className='home'>
        <Navbar/>
        <ListDate/>
        <SelectForm/>
        <Footer/>
    </div>
  )
}

export default List;