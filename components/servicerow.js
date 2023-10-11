import Link from "next/link";

export default function ServiceRow({link,text,imageClass}) {

    return (
      <section className='h-[40vh] lg:h-[50vh] hover:border border-[tan] w-[100%] hover:shadow-sm shadow-[tan] rounded-md'>
        <div className={`rounded-md ${imageClass}`}>
          <div className=' h-full bg-[#26282A]/70 flex justify-center items-center text-center text-[tan] rounded-md font-bold text-lg'>
            <h3 className="text-xl hover:underline">
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
    <section className='h-[40vh] sm:h-[50vh] bg-[tan]/60 w-[260px] sm:w-[380px] shadow-md shadow-[tan] rounded-md'>
      <div className={`rounded-md ${imageClass}`}>
        <div className=' h-full hover:bg-black/70 flex justify-center items-center text-center text-[tan] rounded-md font-bold text-lg'>
        </div>
      </div>
    </section>
  )
}