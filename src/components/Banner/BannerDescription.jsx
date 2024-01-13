import React from 'react'
import classnames from "classnames"


export default function BannerDescription({children, variant}) {
    let variantClass = variant && `test-${variant}`
    const allClasses = classnames('p-description', variantClass)
    
    return (
            
        <p className={allClasses}>{children}</p>
    )
}