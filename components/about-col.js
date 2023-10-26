
import Link from "next/link";

export function AboutCol2({ imageSrc,header,body,children,blockId,linkHead }) {

    return (
        <section id={blockId} className="my-10 flex flex-col sm:grid sm:grid-cols-2 gap-2 justify-center p-2">
            <article className={`${imageSrc} flex items-center justify-center rounded-lg shadow-md shadow-[tan] border-l-2 border border-[tan]/70 min-h-[30vh]`}>

                <div className=' h-full w-full flex justify-center items-center bg-[#26282A]/50'>
                    <Link href={`/contact#contact`}>
                        <div className='flex flex-col items-center justify-center text-center text-lg font-bold gap-1 sm:gap-2 bg-[#26282A]/70 text-[tan] p-3 sm:p-5 rounded-md border-b-2 border-[tan]'>
                            <h1 className='text-xl sm:text-2xl font-bold hover:border-y-2 ease-out transition duration-800 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0] animate-bounce hover:animate-none'>Join our happy clients!</h1>
                        </div>
                    </Link>
                </div>
            </article>
            <div>
                <Link href={`/about#${linkHead}`}>
                    <h1 className="text-center font-bold text-2xl shadow-md shadow-[tan] py-1 border-b-2 border-[#26282A] rounded-md text-[#26282A] bg-[tan]">{header}
                    </h1>
                </Link>
                <blockquote className="my-1">
                    {body}
                    {children}
                </blockquote>

            </div>
        </section>
    )
}

export default function AboutCol({header,body,children}) {

    return (
        <section id="about" className="my-10 flex flex-col sm:grid sm:grid-cols-2 gap-2 justify-center p-2">
            <div>
                <Link href={'/about#about'}>
                    <h1 className="text-center font-bold text-2xl shadow-md shadow-[tan] py-1 border-b-2 border-[#26282A] rounded-md text-[#26282A] bg-[tan]">{header}
                    </h1>
                </Link>
                <blockquote className="my-1">
                    {body}
                    {children}
                </blockquote>

            </div>
            <article className="bg-[url('/images/13.jpg')] bg-cover bg-center flex items-center justify-center rounded-lg shadow-md shadow-[tan] border-l-2 border border-[tan]/70 min-h-[30vh]">

                <div className=' h-full w-full flex justify-center items-center bg-[#26282A]/50'>
                    <Link href={'/contact#contact-us'}>
                        <div className='flex flex-col items-center justify-center text-center text-lg font-bold gap-1 sm:gap-2 bg-[#26282A]/70 text-[tan] p-3 sm:p-5 rounded-md border-b-2 border-[tan]'>
                            <h1 className='text-xl sm:text-2xl font-bold hover:border-y-2 ease-out transition duration-800 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0] animate-bounce hover:animate-none'>Join our happy clients!</h1>
                        </div>
                    </Link>
            </div>
            </article>
        </section>
    )
}