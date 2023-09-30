
import Link from "next/link";
import React from "react";
import { SiHomeassistant } from 'react-icons/si';
import { TfiGallery } from 'react-icons/tfi';
import { IoIosContacts } from 'react-icons/io';
import { Button } from "@mui/material";
;

export default function NavigationBar() {

    return (
        <section>
            <nav className="top-0 left-0 right-0 fixed z-40 bg-[#26282A] text-[tan] p-2 border-b-2 border-[tan]">
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

                <div 
                className='flex flex-col items-center justify-center text-center gap-1 sm:gap-2 bg-[#26282A]/80 text-[tan] p-3 sm:p-5 rounded-md'>
                <h1 className='text-xl sm:text-2xl font-bold border-y-2 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0]'>Royal Acumen Consult</h1>
                <input 
                placeholder="Subscribe to daily health tips"
                className="py-1 px-2 border-b border-[tan] w-full placeholder:italics bg-transparent placeholder:text-center"/>
                <Button
                style={{
                    color: 'tan',animationName:'example',animationDuration:'4s', animationIterationCount:'infinite',animationTimingFunction:'ease-in-out'
                }}>Subscribe</Button>
                </div>
            </article>
        </section>
    )
}
