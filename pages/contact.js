
import ContactHead from "@/components/contact-head";
import ContactForm from "@/components/contactForm";
import Head from "next/head";
import React from "react";



export default function Contact() {
    const [ contactDetails,setCompanyDetails ] = React.useState([
        {id: 2, header: 'Company Email', body: 'spadesinstitute.empire@gmail.com'},
        {id: 3, header: 'Company Phone', body: '+123456789'},
        {id: 4, header: 'Company Address', body: 'Abuja, FCT.'},
    ])

    return (
        <>
            <Head >
                <link rel="shortcut icon" href="/SPADES3.ICO" type="image/x-icon" />
                <title>Royal Acumen Consult | Contact Us </title>
                <meta name="description" content="royal acumen consult is dedicated to providing top-notch services to ensure the success of your business." />
            </Head>
            <div className="flex items-center justify-center my-5">
                <h1 className="text-center font-bold text-[@26282A] border-b border-[tan] py-1 px-2 ">Contact Us</h1>
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
        </>
    )
}