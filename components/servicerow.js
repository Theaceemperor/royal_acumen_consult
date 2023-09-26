
import Link from "next/link";
import { useRouter } from "next/router";

export default function ServiceRow({link,text,imageClass}) {
    const router = useRouter();

    return (
      <section className='h-[20vh] mx-1 p-1 sm:h-[30vh] bg-[#ebccab] w-[260px] sm:w-[300px] shadow-md shadow-[#666666] rounded-md'>
        <div className={imageClass}>
          <div className=' h-full bg-black/50 flex justify-center items-center text-center text-[#Ebccab] rounded-md font-bold text-lg'>
            <h3>
              <Link href={link}>
                {text}
            </Link></h3>
          </div>
        </div>
      </section>
    )
}

export function GalleryRow({imageClass}) {

  return (
    <section className='h-[20vh] sm:h-[50vh] bg-[#ebccab] w-[260px] sm:w-[400px] shadow-md shadow-[#666666] rounded-md'>
      <div className={imageClass}>
        <div className=' h-full hover:bg-black/50 flex justify-center items-center text-center text-[#Ebccab] rounded-md font-bold text-lg'>
        </div>
      </div>
    </section>
  )
}