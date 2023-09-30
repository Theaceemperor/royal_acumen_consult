
import React from "react";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";

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
        <section className="flex w-full flex-col gap-2 justify-center items-center lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 px-2 my-5 text-[#666666]">
            {
                names.map((item,index) => (
                    <article key={index} className="flex flex-col gap-2 p-2 items-center justify-center rounded-md border-2 border-[#26282A] bg-[tan]/50">
                        {
                            review.map((text,index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image 
                                        alt="product image"
                                        width={957}
                                        height={652}
                                        className="w-[40px] h-[40px] border border-[#26282A] rounded-full"
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
    )
}