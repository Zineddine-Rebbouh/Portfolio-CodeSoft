import React from 'react'
import { SectionWrapper } from "../utils";
import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
} from "../assets"
import { styles } from '../styles';

import pic1 from '../assets/picture1.jpg'

const About = () => {
    return (
        <>
            <div className='mb-10'>
                <p className={ `${ styles.sectionSubText } text-center` }>
                    About me
                </p>
                <h2 className={ `${ styles.sectionHeadText } text-center` }>
                    Overview.
                </h2>
            </div>
            <section className='lg:flex sm:flex-row justify-between items-center relative gap-10'>
                <div className='flex flex-col flex-1 items-center justify-center'>
                    <p className='w-100 mb-4 text-secondary text-xl leading-10'>
                        Hey there! I'm <strong>ZINEDDINE REBBOUH</strong> , a full-stack MERN developer passionate about crafting dynamic web experiences. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building scalable applications. Driven by innovation and excellence, I thrive on solving complex problems and delivering top-notch solutions. Let's collaborate and create something extraordinary together!
                    </p>
                </div>
                <div className='flex-1 flex flex-col items-start gap-8'>

                    {/* <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>
                        <img className='w-48 h-auto transition-all duration-300 ease-in-out  hover:transform hover:-translate-x-2' src={ pic2 } alt="" />
                    </div> */}
                    <img className='w-full rounded-lg transition-all duration-300 ease-in-out my-5' src={ pic1 } alt="" />
                </div>
            </section>
            <div className={ `px-10 flex flex-wrap justify-center  my-5` }>
                <div className='flex flex-wrap justify-center gap-8'>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ reactjs } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ css } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ tailwind } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ docker } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ javascript } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ typescript } alt="" />

                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2 '>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ mongodb } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ redux } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ html } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ git } alt="" />
                    </div>
                    <div className='w-20 h-20 flex items-center rounded-lg justify-center border-2'>

                        <img className='w-48 h-auto transition-all duration-300 ease-in-out hover:transform hover:-translate-x-2' src={ nodejs } alt="" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default SectionWrapper( About, 'about' );
