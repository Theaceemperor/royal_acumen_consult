import React from "react";
import Head from "next/head";
import Link from "next/link";
import { RaGallery } from "@/components/gallery";


export default function OurGallery() {
      
    return (
        <>
            <Head >
                <link rel="shortcut icon" href="/raconsult.ICO" type="image/x-icon" />
                <title>Royal Acumen Consult | Team dedicated gallery. </title>
                <meta name="description" content="royal acumen consult is dedicated to providing top-notch services to ensure the success of your business." />
            </Head>
            <blockquote id="gallery" className='flex flex-col gap-1 text-center justify-center my-5'>
                <h3 className='font-bold text-xl hover:underline decoration-[#ebccab]'><Link href={'/gallery#gallery'}>Our Gallery</Link></h3>
                <small>Consultation and premium healthcare services tailored for you!</small>
            </blockquote>
            
            <RaGallery />
        </>
    )
}