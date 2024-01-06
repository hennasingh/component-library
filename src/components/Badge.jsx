import React from 'react'
import classnames from "classnames"

export default function Badges({style, variant}) {
    let styleClass = style && `button-${style}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(styleClass, variantClass)
    const formatVariant = variant[0].toUpperCase() + variant.slice(1)
    const formatStyle = style[0].toUpperCase() + style.slice(1)
    
    return (
        <main>
            <p>{formatVariant} - {formatStyle}</p>
            <button className={allClasses}>Badge</button>
        </main>
    )
}