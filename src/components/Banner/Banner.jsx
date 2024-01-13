import React from 'react'
import classnames from "classnames"
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoWarning } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function Banner({children, variant}) {
    let variantClass = variant && `banner-${variant}`
    let bannerClass = "banner"
    const allClasses = classnames(bannerClass, variantClass)
    let iconType = ''

    if(variant == "success") {
        iconType = <IoMdCheckmarkCircle className= {variant}/>
    } else if(variant == "warning") {
        iconType = <IoWarning className={variant}/>
    } else if(variant == "error") {
        iconType =  <FaTimesCircle className={variant}/>
    } else {
        iconType = <FaCircleInfo className={variant}/>
    }
    return (
        <div>
            <p className="p-variant">{variant} - {children.length > 1 ? "multiline" : "singleline"}</p>
            <div className={allClasses}>
                <div className="div-banner">
                    {iconType}
                    {children}
                </div>
            </div>
        </div>
    )
}