
import Image from "next/image";

export default function AboutCol({header,body,imageSrc,children}) {

    return (
        <section className="my-5 flex flex-col sm:grid sm:grid-cols-2 gap-2 justify-center p-1">
            <div>
                <h1 className="text-center font-bold text-2xl shadow-lg shadow-[#ebccab] py-1 border-b border-[#666666] text-black/70">{header}</h1>
                <blockquote className="my-1">
                    {body}
                    {children}
                </blockquote>

            </div>
            <div className="mt-10">
                <Image 
                src={imageSrc}
                alt="about image"
                priority
                width={820}
                height={1024}
                className="rounded-md shadow-md shadow-[#666666]"
                />
            </div>
        </section>
    )
}