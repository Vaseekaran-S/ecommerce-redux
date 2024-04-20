import React, { useState } from 'react'

function PopupModal({children,isModalOpen,setIsModalOpen}) {
    return (
        <div className={`position-fixed top-0 left-0 h-[100vh] w-[100vw] items-center justify-center ${isModalOpen ? 'flex' :'hidden'}`}>
            <div className='position-fixed bg-[#1d1d1d66] h-[100vh] w-[100vw] z-5' onClick={()=>setIsModalOpen(false)}></div>
            <div className='card p-2'>
                {children}
            </div>
        </div>
    )
}

export default PopupModal
