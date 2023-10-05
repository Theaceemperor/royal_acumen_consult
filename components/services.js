
import React from "react";
import ServiceRow from "./servicerow";
import Link from "next/link";

export default function Services() {
    const [ services,setServices ] = React.useState([
        { id: 1, link: "#", text: "Public health consultation", imageName: "bg-[url('/images/8.jpg')] bg-cover bg-center h-full" },
        { id: 2, link: "#", text: "General contracts", imageName: "bg-[url('/images/3.jpg')] bg-cover bg-center h-full" },
        { id: 3, link: "#", text: "Sales", imageName: "bg-[url('/images/11.jpg')] bg-cover bg-center h-full" },
      ]);
      
    return (
        <section id='service' className='flex flex-col gap-3 my-20 items-center justify-center'>
            <blockquote className='flex flex-col gap-1 text-center justify-center text-[tan]'>
                <Link href={'#service'}>
                    <h3 className='font-bold text-xl underline decoration-[tan]'>Our Consulting Scope</h3>
                </Link>
                <small>Consultation services tailored for you!</small>
            </blockquote>
            <div className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 justify-center items-center  gap-5 sm:gap-8'>
            {
                services.map((item) => (
                <ServiceRow key={item.id}
                link={item.link}
                text={item.text}
                imageClass={item.imageName}
                />
                ))
            }
            </div>
        </section>
    )
}

