
import { useRouter } from "next/router";

export default function Cta() {
    const router = useRouter();

    return (
        <section className='my-5 h-[30vh] p-2 sm:p-5 sm:h-[50vh]'>
          <div className="bg-[url('/images/cta.jpg')] bg-cover bg-center h-full ">
            <div className='w-full h-full bg-black/50 flex flex-col gap-3 sm:gap-5 justify-center items-center text-center text-[#Ebccab] rounded-md'>
              <p className='font-bold px-2'>Book our services anywhere in the world today!</p>
              <button onClick={() => router.push('/contact')} className='border-b border-[#666666] text-md hover:border-y hover:border-[#Ebccab]'>Contact Us</button>
              <small className='px-2'>Healthy consultation service you deserve!</small>
            </div>
          </div>
        </section>
    )
}