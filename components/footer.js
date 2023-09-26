
import Image from "next/image";
import Link from "next/link";

export default function() {

    return (
        <>
            <section className='bottom-0 left-0 right-0 p-1 my-5 bg-[#Ebccab] text-[#666666] border-y border-[#666666]'>
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <h3 className='underline decoration-[#666666]'>What we do!</h3>
                    <p>We offer top-notch public health consultation, general contracts and sales. Feel free to contact us if you have questions regarding a service</p>
                    <ul className='flex flex-row justify-center items-center sm:gap-5 text-center text-sm gap-2 sm:text-lg'>
                    <li><Link href={"/terms"}>T & C</Link></li>
                    <li><Link href={"#"}>© 2023 Royal Acumen</Link></li>
                    <li><Link href={"/privacy policy"}>Privacy Policy</Link></li>
                    </ul>
                </div>
            </section>
            <div className="bottom-0 right-0 fixed flex flex-col h-[100px] p-1 gap-1 items-center justify-center z-20">
                <Link href={"#"}
                >
                    <Image 
                    alt="whatsapp logo"
                    src={'/icons/R.png'}
                    width={40}
                    height={40}
                    priority
                    className="w-[32px] h-[32px] rounded-full"
                    />
                </Link>
                
                <Link href={"#"}>
                    <Image 
                    alt="whatsapp logo"
                    src={'/icons/x.jfif'}
                    width={40}
                    height={50}
                    priority
                    className="w-[32px] h-[32px] rounded-full"
                    />
                </Link>
            </div>
        </>
    )
}