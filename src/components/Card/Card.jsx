import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({children}) {

    return (
        <>
            <div className='card-upload'>
                <IoCloudUploadOutline />   
            </div>              
            <div className='card-body' >
                {children}
            </div>
        </>
    )
}