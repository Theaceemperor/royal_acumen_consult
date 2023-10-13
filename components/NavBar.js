import React from "react";
import PositionedMenu from "./navPopper";

export default function NavigationBar() {

    return (
        <section>
                <PositionedMenu />
            <article
                className="bg-[url('/images/13.jpg')] bg-cover bg-center px-2 sm:p-0 h-[70vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center mb-5">

                <blockquote
                id="subscribe"
                className='flex flex-col items-center justify-center text-center gap-1 sm:gap-2 bg-[#252324]/80 text-[tan] p-3 sm:p-5 rounded-md'>
                    <h1 className='text-xl sm:text-2xl font-bold border-y-2 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0]'>Royal Acumen Consult</h1>
                    
                </blockquote>
            </article>
        </section>
    )
}

