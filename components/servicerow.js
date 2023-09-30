
import Link from "next/link";
import { useRouter } from "next/router";

export default function ServiceRow({link,text,imageClass}) {
    const router = useRouter();

    return (
      <section className='h-[40vh] mx-1 p-1 sm:h-[50vh] bg-[tan] w-[240px] sm:w-[350px] shadow-lg shadow-[#26282A] rounded-md'>
        <div className={imageClass}>
          <div className=' h-full bg-[#26282A]/70 flex justify-center items-center text-center text-[tan] rounded-md font-bold text-lg'>
            <h3 className="text-xl">
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
    <section className='h-[40vh] sm:h-[50vh] bg-[#26282A]/60 w-[260px] sm:w-[400px] shadow-md shadow-[#26282A] rounded-md'>
      <div className={imageClass}>
        <div className=' h-full hover:bg-[#26282A]/70 flex justify-center items-center text-center text-[tan] rounded-md font-bold text-lg'>
        </div>
      </div>
    </section>
  )
}