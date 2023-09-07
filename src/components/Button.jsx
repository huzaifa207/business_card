import React from 'react'
import { HiMail } from "react-icons/hi"
import { RxLinkedinLogo } from "react-icons/rx"

const Button = ({text, customStyle}) => {
    return (
        <button className='info--btn' style={{...customStyle}}>
            {text === "Email" ? <HiMail className='info--btn_icon'/> : <RxLinkedinLogo className='info--btn_icon'/>} 
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button