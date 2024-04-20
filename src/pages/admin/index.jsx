import React, { useState } from 'react'
import AddProduct from '../../components/AddProduct'
import PopupModal from '../../components/Modal'

function Admin() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            <div className='py-3 bg-dark text-white'>
                <div className="container d-flex ">
                    <h3>Pondian - Admin Panel</h3>
                </div>
            </div>
            <div className="container py-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h5>Products: <strong>20</strong></h5>
                    <button className='btn btn-dark' onClick={()=>setIsModalOpen(true)}>Add Product +</button>
                </div>
                { isModalOpen && <PopupModal children={<AddProduct/>} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> }
                    
            </div>
        </div>
    )
}

export default Admin
