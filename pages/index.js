
import React from 'react';
import Services from '@/components/services';
import AboutCol from '@/components/about-col';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { HappyClients } from '@/components/acumenPercent';

export default function Home() {
  const [ galleryImages,setGalleryImages ] = React.useState([
    { id: 1, src: '/images/1.jpg'},
    { id: 3, src: '/images/19.jpg'},
    { id: 5, src: '/images/15.jpg'},
    { id: 6, src: '/images/17.jpg'},
  ])

  return (
    <main>
      <Head >
        <link rel="shortcut icon" href="/raconsult.ICO" type="image/x-icon" />
        <title>Royal Acumen Consult | Home of fascinating consultation </title>
        <meta name="description" content="royal acumen consult is dedicated to providing top-notch services to ensure the success of your business." />
      </Head>

      <section className='flex flex-col justify-center items-center my-20 gap-3'>
        <p className='text-center'><Link href={'/about#about'}
        className='underline'>Read about us here!</Link></p>
        <HappyClients />
      </section>

      <Services />

      <AboutCol header={"Royal Acumen Consult"} imageSrc={'/images/12.jpg'}>
        <div className='grid grid-cols-2 p-1 gap-2'>
          {
            galleryImages.map((item) => (
              <Link href={"#gallery"} 
              key={item.id}
              >
                <Image 
                alt='gallery Image'
                width={820}
                height={1080}
                src={item.src}
                className='h-auto rounded-md bg-[#26282A] border-2 border-[tan] shadow-md shadow-[#26282A]'
                />
              </Link>
            ))
          }
        </div>
      </AboutCol>

    </main>
  )
}
