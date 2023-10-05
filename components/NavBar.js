
import Link from "next/link";
import React from "react";
import * as yup from 'yup';
import { SiHomeassistant } from 'react-icons/si';
import { TfiGallery } from 'react-icons/tfi';
import { IoIosContacts } from 'react-icons/io';
import { Alert, Button } from "@mui/material";
import { useFormik } from "formik";
import { SubscribeAlert } from "./alert";

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
            <nav className="top-0 left-0 right-0 fixed z-40 bg-[#252324] text-[tan] p-2 border-b-2 border-[tan]">
                <ul className="flex flex-row font-bold items-center justify-evenly text-sm">
                    <li><Link href={"/"}><SiHomeassistant className="text-xl"/></Link></li>
                    <li><Link 
                    href={"/about"}
                    >About</Link></li>
                    <li>
                        <Link 
                        href={"/contact"}
                        className="flex items-center">C<IoIosContacts />ntact
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href={"/gallery"}
                        className="flex items-center">Gallery <TfiGallery />
                        </Link>
                    </li>
                </ul>
            </nav>
            <article
                className="bg-[url('/images/13.jpg')] bg-cover bg-center px-2 sm:p-0 h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center my-5">

                <form onSubmit={handleSubmit}
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

