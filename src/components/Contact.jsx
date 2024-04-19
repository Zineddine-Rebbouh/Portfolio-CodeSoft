import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../utils";

const Contact = () => {
    const [ form, setForm ] = useState( {
        name: "",
        email: "",
        message: "",
    } );

    const [ loading, setLoading ] = useState( false );

    const handleChange = ( e ) => {
        const { target } = e;
        const { name, value } = target;

        setForm( {
            ...form,
            [ name ]: value,
        } );
    };

    return (
        <section>
            <div className='mb-10'>
                <p className={ `${ styles.sectionSubText } text-center` }>
                    Keep in touch
                </p>
                <h2 className={ `${ styles.sectionHeadText } text-center` }>
                    Contact.
                </h2>
            </div>
            <div
                className={ `xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden min-w-full justify-center` }
            >
                <div
                    className='flex-[0.75] bg-secondary p-8 rounded-2xl'
                >
                    <form
                        className='mt-12 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={ form.name }
                                onChange={ handleChange }
                                placeholder="What's your good name?"
                                className='bg-white py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                value={ form.email }
                                onChange={ handleChange }
                                placeholder="What's your web address?"
                                className='bg-white py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={ 7 }
                                name='message'
                                value={ form.message }
                                onChange={ handleChange }
                                placeholder='What you want to say?'
                                className='bg-white py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary'
                        >
                            { loading ? "Sending..." : "Send" }
                        </button>
                    </form>
                </div>
                {/* <div
                    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
                >
                    <img src="" alt="" />
                </div> */}
            </div>
        </section>
    );
};

export default SectionWrapper( Contact, "contact" );