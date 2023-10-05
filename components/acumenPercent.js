import React from "react";
import { FaRProject } from "react-icons/fa";
import { TbMoodHappy } from 'react-icons/tb';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaPersonCircleCheck } from "react-icons/fa6";

export function HappyClients() {

    return (
        <>
            <section id="stats" className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                <div className="p-5 flex items-center justify-between gap-5 border boorder-[tan] text-[tan] rounded-md">
                    <BsFillPatchCheckFill className="text-4xl text-[tan]" />
                    <aside className="flex flex-col gap-2">
                        <strong className="font-bold">Success rate</strong>
                        <p>99%</p>
                    </aside>
                </div>
                <div className="p-5 flex items-center justify-between gap-5 border boorder-[tan] text-[tan] rounded-md">
                    <TbMoodHappy className="text-4xl text-[tan]" />
                    <aside className="flex flex-col gap-2">
                        <strong className="font-bold">Happy clients</strong>
                        <p>98%</p>
                    </aside>
                </div>
                <div className="p-5 flex items-center justify-between gap-5 border boorder-[tan] text-[tan] rounded-md">
                    <FaRProject className="text-4xl text-[tan]" />
                    <aside className="flex flex-col gap-2">
                        <strong className="font-bold">Projects completed</strong>
                        <p>100+</p>
                    </aside>
                </div>
                <div className="p-5 flex items-center justify-between gap-5 border boorder-[tan] text-[tan] rounded-md">
                    <FaPersonCircleCheck className="text-4xl text-[tan]" />
                    <aside className="flex flex-col gap-2">
                        <strong className="font-bold">Our clients</strong>
                        <p><strong>10000+</strong> corporates & individuals</p>
                    </aside>
                </div>
            </section>
        </>
    )
}