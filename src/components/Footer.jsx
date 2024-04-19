import React from 'react'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import telegram from '../assets/telegram-app.svg'
import gmail from '../assets/company/gmail.png'
import phone from '../assets/company/phone-call.png'
import share from '../assets/company/share.png'

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center gap-10 pt-10 pb-5 h-30'>
            <div className='text-center'>
                <span className='flex justify-center gap-3 mb-5'>
                    <img src={ gmail } alt="" />
                    <p className='font-bold text-lg text-secondary'>E-mail</p>
                </span>
                <span>
                    <p className='text-secondary'>zinedinerabouh@gmail.com</p>
                </span>
            </div>
            <div className='text-center'>
                <span className='flex justify-center gap-3 mb-5'>
                    <img src={ phone } alt="" />
                    <p className='font-bold text-lg text-secondary'>Phone</p>
                </span>
                <span>
                    <p className='text-secondary'>(+213) 0562163159</p>
                </span>
            </div>
            <div className='text-center'>
                <span className='flex justify-center gap-3 mb-5'>
                    <img src={ share } alt="" target="_blank" />
                    <p className='font-bold text-lg text-secondary '>Social Media</p>
                </span>
                <div className='flex items-center justify-center gap-3'>
                    <a href="https://www.linkedin.com/in/zineddine-rebbouh-14baa2268" target="_blank">
                        <img width={ 45 } src={ linkedin } alt="linkedin" />
                    </a>
                    <a href="https://t.me/zinoulite" target="_blank">
                        <img width={ 45 } src={ telegram } alt="linkedin" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011042796601" target="_blank">
                        <img width={ 45 } src={ facebook } alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer
