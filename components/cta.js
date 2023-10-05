
import { useRouter } from "next/router";

export default function Cta() {
    const router = useRouter();

    return (
        <section id="cta" className='my-20 h-[30vh] p-2 sm:p-5 sm:h-[50vh]'>
          <div className="bg-[url('/images/cta.jpg')] bg-cover bg-center h-full rounded-md ">
            <div className='w-full h-full bg-black/50 flex flex-col gap-3 sm:gap-5 justify-center items-center text-center text-[tan] rounded-md'>
              <p className='font-bold px-2'>Book our services anywhere in the world today!</p>
              <button onClick={() => router.push('/contact')} className='border-b border-[tan] text-md hover:border-y hover:border-[tan] hover:rounded-md duration-300 py-1 px-2 animate-bounce hover:animate-none'>Contact Us</button>
              <small className='px-2'>Healthy consultation service you deserve!</small>
            </div>
          </div>
        </section>
    )
}