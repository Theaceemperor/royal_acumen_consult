
import React from "react";
import ServiceRow from "./servicerow";
import Link from "next/link";

export default function Services() {
    const [ services,setServices ] = React.useState([
        { id: 'general-contracts', link: "#general-contracts", text: "General contracts", imageName: "bg-[url('/images/3.jpg')] bg-cover bg-center h-full" },
        { id: 'sales', link: "#sales", text: "Sales", imageName: "bg-[url('/images/11.jpg')] bg-cover bg-center h-full" },
      ]);
      
    return (
        <section id='service' className='flex flex-col gap-3 my-20 items-center justify-center'>
            <blockquote className='flex flex-col gap-1 text-center justify-center text-[tan]'>
                <Link href={'#service'}>
                    <h3 className='font-bold text-xl underline decoration-[tan]'>Our Consulting Scope</h3>
                </Link>
                <small>Consultation services tailored for you!</small>
            </blockquote>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center px-2 w-full sm:px-5'>
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

