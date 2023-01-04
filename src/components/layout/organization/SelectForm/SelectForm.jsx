import React from 'react'
import Select from 'react-select';

// -----------EJEMPLO CON BASE DE DATOS---------

const DBCoders = [ 
    {id: 1, name: 'Rocio', email: 'rociocoder@factoria.org'},
    {id: 1, name: 'Andres', email: 'Andrescoder@factoria.org'},
    {id: 1, name: 'Gary', email: 'Garycoder@factoria.org'},
 ]

const SelectForm = () => {

    const handleSelectChange = ({ value } ) => 
    {
        console.log(value);
    }
  return (

    <div className='select-container'>

        <Select
        options = { DBCoders.map (sup => ({label:sup.name , value:sup.id}))}
        onChange = { handleSelectChange}        
        />
        <Select
        options = { DBCoders.map (sup => ({label:sup.email , value:sup.id}))}
        onChange = { handleSelectChange}  
            
        />
       

    </div>
    
  )
}

export default SelectForm;

