
import React from "react";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";
import Link from "next/link";

export default function Reviews() {
    const names = ['James Don', 'Blue Berry', 'Client', 'Unknown User', 'Client', 'Developer', 'Delaware' ];

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    const lorem1 = lorem.generateSentences(1);
    
    const review = [lorem.generateSentences(1)];

    return (
        <>
            <h1 className="underline decoration-[tan] offset-4 text-center font-bold text-xl mt-5"><Link href={'#reviews'}>Reviews</Link></h1>
            <section id="reviews" className="flex w-full flex-col gap-5 justify-center items-center lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 px-2 my-5 text-[tan]">
                {
                    names.map((item,index) => (
                        <article key={index} className="flex flex-col gap-2 p-2 items-center justify-center rounded-md shadow-[1px_1px_3px_2px] shadow-[tan]">
                            {
                                review.map((text,index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Image 
                                            alt="product image"
                                            width={957}
                                            height={652}
                                            className="w-[40px] h-[40px] border border-[tan] rounded-full"
                                            src={"/images/5.jpg"}
                                            />
                                            <h3 className="font-bold">{item}</h3>
                                        </div>
                                        <div>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </article>
                    ))
                }
                
            </section>
        </>
    )
}