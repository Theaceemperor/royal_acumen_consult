
import React from "react";
import ServiceRow from "./servicerow";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Services() {
    const router = useRouter();
    const [ services,setServices ] = React.useState([
        { id: 1, link: "#", text: "Public health consultation", imageName: "bg-[url('/images/8.jpg')] bg-cover bg-center h-full" },
        { id: 2, link: "#", text: "General contracts", imageName: "bg-[url('/images/3.jpg')] bg-cover bg-center h-full" },
        { id: 3, link: "#", text: "Sales", imageName: "bg-[url('/images/11.jpg')] bg-cover bg-center h-full" },
      ]);
      
    return (
        <>
            <blockquote className='flex flex-col gap-1 text-center justify-center my-5 text-[#26282A]'>
                <Link href={'#service'}>
                    <h3 className='font-bold text-xl underline decoration-[tan]'>Our Services</h3>
                </Link>
                <small>Consultation services tailored for you!</small>
            </blockquote>
            
            <section className='flex items-center justify-center'>
                <div className='flex flex-col sm:grid sm:grid-cols-3 justify-center items-center my-5 gap-3'>
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
        </>
    )
}

