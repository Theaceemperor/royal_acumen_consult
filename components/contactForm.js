
import { TextField,Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { ContactAlert } from './alert';

const validationRules = yup.object().shape({
    name:yup.string().required('This field is required!'),
    email:yup.string().required('This field is required!'),
    message:yup.string().required('This field is required!'),
    phone:yup.number().required('This field is required!')
})

export default function ContactForm() {
    const [ openContactDialog,setOpenContactDialog ] = React.useState(false);

    const handleContactUs = () => {
        setOpenContactDialog(true);
        setTimeout(() => {
            setOpenContactDialog(false);
        }, 10000);
    };
 
    const handleCloseContactUs = () => {
        setOpenContactDialog(false);
    };

    const { handleBlur,handleChange,handleSubmit,errors,values,touched } = useFormik({
        initialValues: {name:'', email: '', phone: '', message: ''},
        onSubmit: values => {
            handleContactUs();
            values.name = '';
            values.email = '';
            values.phone = '';
            values.message = '';

        },
        validationSchema:validationRules
    });

    return (
        <>
            <section className='text-center flex flex-col justify-center items-center my-5 gap-5 px-1'>
                <h1 className='underline underline-offset-4 decoration-[tan] offset-4 font-bold text-lg'>Fill and Submit, we'll respond shortly</h1>
                <div>
                    <form className='text-center flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
                        <input 
                        id='name'
                        placeholder='Name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className='px-5 py-4 bg-transparent border-b-2 border-[tan] placeholder:text-[tan] focus:outline-none text-tan'
                        />
                        
                        {errors.name && touched.name
                        ? <span className="text-red-500">{errors.name}</span> : null}
                        
                        <input
                        id='email' 
                        placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type='email'
                        value={values.email}
                        className='px-5 py-4 bg-transparent border-b-2 border-[tan] placeholder:text-[tan] focus:outline-none text-tan'
                        />
                        
                        {errors.email && touched.email
                        ? <span className="text-red-500">{errors.email}</span> : null}
                        
                        <input
                        id='phone' 
                        placeholder='Phone Number'
                        type='tel'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        className='px-5 py-4 bg-transparent border-b-2 border-[tan] placeholder:text-[tan] focus:outline-none text-tan'
                        />
                        {errors.phone && touched.phone
                        ? <span className="text-red-500">{errors.phone}</span> : null}
                        
                        
                        <textarea
                        id='message' 
                        placeholder='Your Message'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        value={values.message}
                        className='px-5 py-4 bg-transparent border-b-2 border-[tan] placeholder:text-[tan] focus:outline-none text-tan w-full'
                        />

                        {errors.message && touched.message
                        ? <span className="text-red-500">{errors.message}</span> : null}
                        
                        <Button 
                        style={{
                            background:'tan',
                            color:'#252324',
                        }}
                        type='submit'
                        className='hover:bg-transparent'
                        >Submit</Button>
                    </form>
                </div>
            </section>
            {
                openContactDialog
                ?
                <ContactAlert close={handleCloseContactUs} />
                :
                null
            }
        </>
    )
}