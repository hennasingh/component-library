import React from 'react'
import classnames from "classnames"

export default function Banner({children, variant}) {
    let variantClass = variant && `banner-${variant}`
    let bannerClass = "banner"
    const allClasses = classnames(bannerClass, variantClass)

    return (
        <div>
            <p className="p-variant">{variant} - {children.length > 1 ? "multiline" : "singleline"}</p>
            <div className={allClasses}>
                {children}
            </div>
        </div>
    )
}