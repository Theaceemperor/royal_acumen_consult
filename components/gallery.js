import React from "react";
import { GalleryRow } from "./servicerow";

export function RaGallery() {
    const [ services,setServices ] = React.useState([
        { id: 1, link: "#", text: "Public health consultation", imageName: "bg-[url('/images/8.jpg')] bg-cover bg-center h-full" },
        { id: 2, link: "#", text: "General contracts", imageName: "bg-[url('/images/3.jpg')] bg-cover bg-center h-full" },
        { id: 3, imageName: "bg-[url('/images/10.jpg')] bg-cover bg-center h-full" },
        { id: 4, imageName: "bg-[url('/images/1.jpg')] bg-cover bg-center h-full" },
        { id: 5, imageName: "bg-[url('/images/5.jpg')] bg-cover bg-center h-full" },
        { id: 6, imageName: "bg-[url('/images/17.jpg')] bg-cover bg-center h-full" },
        { id: 7, imageName: "bg-[url('/images/7.jpg')] bg-cover bg-center h-full" },
        { id: 8, imageName: "bg-[url('/images/9.jpg')] bg-cover bg-center h-full" },
        { id: 9, imageName: "bg-[url('/images/12.jpg')] bg-cover bg-center h-full" },
        { id: 10, imageName: "bg-[url('/images/11.jpg')] bg-cover bg-center h-full" },
        { id: 11, imageName: "bg-[url('/images/bg.jpg')] bg-cover bg-center h-full" },
        { id: 12, imageName: "bg-[url('/images/cta.jpg')] bg-cover bg-center h-full" },
        { id: 13, imageName: "bg-[url('/images/13.jpg')] bg-cover bg-center h-full" },
        { id: 14, imageName: "bg-[url('/images/14.jpg')] bg-cover bg-center h-full" },
        { id: 15, imageName: "bg-[url('/images/15.jpg')] bg-cover bg-center h-full" },
        { id: 16, imageName: "bg-[url('/images/16.jpg')] bg-cover bg-center h-full" },
        { id: 17, imageName: "bg-[url('/images/18.jpg')] bg-cover bg-center h-full" },
        { id: 18, imageName: "bg-[url('/images/19.jpg')] bg-cover bg-center h-full" },
        { id: 19, imageName: "bg-[url('/images/16.jpg')] bg-cover bg-center h-full" },
        { id: 20, imageName: "bg-[url('/images/4.jpg')] bg-cover bg-center h-full" },
      ]);

    return (
        <section className='flex justify-center items-center my-5'>
            <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-5 px-2'>
                {
                    services.map((item) => (
                    <GalleryRow key={item.id}
                    imageClass={item.imageName}
                    />
                    ))
                }
            </div>
        </section>
    )
}