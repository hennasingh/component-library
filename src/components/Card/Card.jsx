import React from 'react'


export default function Card({children, icon}) {

    return (
        <div className="div-card">
            <div className='card-upload'>
                {icon}
            </div>              
            <div className='card-body' >
                {children}
            </div>
        </div>
    )
}