
import Image from "next/image";
import Link from "next/link";

export default function AboutCol({header,body,imageSrc,children}) {

    return (
        <section className="my-5 flex flex-col sm:grid sm:grid-cols-2 gap-2 justify-center p-2">
            <div>
                <Link href={'#about'}>
                    <h1 className="text-center font-bold text-2xl shadow-lg shadow-[#26282A] py-1 border-b-2 border-[#26282A] rounded-md text-[#26282A] bg-[tan]">{header}
                    </h1>
                </Link>
                <blockquote className="my-1">
                    {body}
                    {children}
                </blockquote>

            </div>
            <article className="bg-[url('/images/13.jpg')] bg-cover bg-center flex items-center justify-center rounded-lg shadow-lg shadow-[tan] border border-[#26282A]/70 min-h-[30vh]">

                <div className=' h-full w-full flex justify-center items-center bg-[#26282A]/50'>
                    <Link href={'/contact'}>
                        <div className='flex flex-col items-center justify-center text-center text-lg font-bold gap-1 sm:gap-2 bg-[#26282A]/70 text-[tan] p-3 sm:p-5 rounded-md border-b-2 border-[tan]'>
                            <h1 className='text-xl sm:text-2xl font-bold hover:border-y-2 ease-out transition duration-800 border-[tan] py-1 px-2 rounded-lg sm:rounded-[0] animate-bounce hover:animate-none'>Join 10,000+ happy clients!</h1>
                        </div>
                    </Link>
            </div>
            </article>
        </section>
    )
}