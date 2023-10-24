
import ContactHead from "@/components/contact-head";
import ContactForm from "@/components/contactForm";
import Head from "next/head";
import Link from "next/link";
import React from "react";



export default function Contact() {
    const [ contactDetails,setCompanyDetails ] = React.useState([
        {id: 2, header: 'Company Email', body: <span>
            <Link className="focus:underline hover:underline" href={'mailto:info4rac@gmail.com'}>info4rac@gmail.com</Link>
        </span> },
        {id: 3, header: 'Company Phone', body: <span>
            <Link className="focus:underline hover:underline" href={'tel:+2348086590003'}>+2348086590003</Link>
        </span> },
        {id: 4, header: 'Company Address', body: <span className="flex flex-col gap-2 my-1">
            <p>Abuja, FCT</p>
            <p>Maiduguri, Borno state</p>
        </span>},
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
            <div className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-2 px-2 my-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244303439!2d7.367465296507847!3d9.024416367940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1698113922014!5m2!1sen!2sng" width="600" height="450" className="rounded-md">
                </iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124957.3565379407!2d13.04947683318244!3d11.841056118955521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f4b9b52795b%3A0x63933a66a7b20361!2sMaiduguri%2C%20Borno!5e0!3m2!1sen!2sng!4v1698114511236!5m2!1sen!2sng" width="600" height="450" className="rounded-md"></iframe>
            </div>
        </>
    )
}