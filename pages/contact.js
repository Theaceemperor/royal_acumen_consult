
import ContactHead from "@/components/contact-head";
import ContactForm from "@/components/contactForm";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { MdAttachEmail } from 'react-icons/md';



export default function Contact() {
    const [ contactDetails,setCompanyDetails ] = React.useState([
        {id: 2, header: <MdAttachEmail />, body: <span>
            <Link className="focus:underline hover:underline" href={'mailto:info4rac@gmail.com'}>info4rac@gmail.com</Link>
        </span> },
        {id: 3, header: <FiPhoneCall />, body: <span>
            <Link className="focus:underline hover:underline" href={'tel:+2348086590003'}>+2348086590003</Link>
        </span> },
        {id: 4, header: <ImLocation2 />, body: '26 Omega Paint Rd, 901101, Kubwa, Abuja, FCT.' },
    ])

    return (
        <>
            <Head >
                <link rel="shortcut icon" href="/raconsult.ICO" type="image/x-icon" />
                <title>Royal Acumen Consult | Contact Us </title>
                <meta name="description" content="royal acumen consult is dedicated to providing top-notch services to ensure the success of your business." />
            </Head>
            <div id="contact-us" className="flex items-center justify-center my-5">
                <h1 className="text-center font-bold hover:shadow-[tan] hover:shadow-sm text-2xl hover:rounded-sm py-1 px-2 "><Link href={'/contact#contact-us'}>Contact Us</Link></h1>
            </div>

            <section className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <article className="my-5">
                    {
                        contactDetails.map((item) => (
                            <ContactHead 
                            key={item.id}
                            header={item.header}>
                                {item.body}
                            </ContactHead>
                        ))
                    }
                </article>

                <ContactForm />
            </section>
            <div className="flex flex-col px-2 my-10 max-w-screen">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.9464420021513!2d7.3141747!3d9.1593044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd8fde15a54f1%3A0x6aa43203dc6a5a3e!2s26%20Omega%20Paint%20Rd%2C%20901101%2C%20Kubwa%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1699098778884!5m2!1sen!2sng" width="600" height="450" className="rounded-md w-[100%] h-auto"></iframe>
            </div>
        </>
    )
}