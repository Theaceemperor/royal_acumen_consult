import React from "react";
import * as yup from 'yup';
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { SubscribeAlert } from "./alert";
import PositionedMenu from "./navPopper";

const validationRules = yup.object().shape({
    email:yup.string().required('Please enter your email address!'),
})

export default function NavigationBar() {
    const [ openSubscribeDialog,setOpenSubscribeDialog ] = React.useState(false);

    const handleSubscribe = () => {
        setOpenSubscribeDialog(true);
        setTimeout(() => {
            setOpenSubscribeDialog(false);
        }, 10000);
    };

    const handleCloseSubscribeDialog = () => {
        setOpenSubscribeDialog(false);
    }

    const { handleBlur,handleChange,handleSubmit,errors,values,touched } = useFormik({
        initialValues: {email: ''},
        onSubmit: values => {
            handleSubscribe();
            values.email = ''
        },
        validationSchema:validationRules
    });

    return (
        <section>
                <PositionedMenu />
            <article
                className="bg-[url('/images/13.jpg')] bg-cover bg-center px-2 sm:p-0 h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center mb-5">

                <form onSubmit={handleSubmit}
                id="subscribe"
                className='flex flex-col items-center justify-center text-center gap-1 sm:gap-2 bg-[#252324]/80 text-[tan] p-3 sm:p-5 rounded-md'>
                    <h1 className='text-xl sm:text-2xl font-bold border-y-2 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0]'>Royal Acumen Consult</h1>
                    <input
                    id="email"
                    type="email"
                    placeholder="Subscribe to daily health tips"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="py-1 px-2 border-b border-[tan] w-full placeholder:italic placeholder:text-[tan] bg-transparent placeholder:text-center text-center focus:outline-none focus:border focus:border-[tan] focus:rounded-md"
                    />
                    
                    {errors.email && touched.email
                        ? <span className="text-[tan]">{errors.email}</span> : null}
                        
                    <Button
                    type="submit"
                    style={{
                        color: 'tan',animationName:'example',animationDuration:'4s', animationIterationCount:'infinite',animationTimingFunction:'ease-in-out'
                    }}>Subscribe</Button>
                </form>
            </article>

            {
                openSubscribeDialog
                ?
                <SubscribeAlert close={handleCloseSubscribeDialog} />
                :
                null
            }
            
        </section>
    )
}

