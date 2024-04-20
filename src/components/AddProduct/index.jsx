import React, { useState } from 'react'
import Input from '../Input'
import inputs from '../../data/inputs/products.json'

function AddProduct() {

  const [formData, setFormData] = useState({})

  const updateForm = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]:value })
  }

  const submitForm = () => {
    console.log(formData);
  }

  return (
    <div className='p-4'>
      <h4>Add Product</h4>
      <div className="grid grid-cols-12 gap-3 mt-4">
        {inputs.map(input => (
          <div className="col-span-12 md:col-span-6">
            <Input {...input} name={input?.id} onChange={updateForm}/>
          </div>
        ))}
        <button className='col-span-12 btn btn-dark' onClick={submitForm}>
          Add Product
        </button>
      </div>
    </div>
  )
}

export default AddProduct