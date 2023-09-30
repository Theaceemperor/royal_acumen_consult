
import Image from "next/image";
import Link from "next/link";
import { PowerBtn } from "./Btn";

export default function() {

    return (
        <>
            <Link href={'#footer'}>
                <section className='bottom-0 left-0 right-0 p-1 my-5 mx-2 rounded-md bg-[#26282A] text-[tan] border-y-2 border-[tan]'>
                    <div className='flex flex-col gap-2 items-center justify-center text-center'>
                        <h3 className='underline decoration-[tan]'>What we do!</h3>
                        <p>We offer top-notch public health consultation, general contracts and sales. Feel free to contact us if you have questions regarding a service</p>
                        {/* <hr style={{background:'tan',color:'tan',opacity:1}}></hr> */}
                        <ul className='flex flex-row justify-center items-center sm:gap-5 text-center text-sm gap-2 sm:text-lg'>
                        <li><Link href={"/terms"}>T & C</Link></li>
                        <li><Link href={"#"}>© 2023 Royal Acumen</Link></li>
                        <li><Link href={"/privacy policy"}>Privacy Policy</Link></li>
                        </ul>
                        <PowerBtn /> 
                    </div>
                </section>
            </Link>
            <div className="bottom-0 right-0 fixed flex flex-col h-[100px] p-1 gap-1 items-center justify-center z-20">
                <Link href={"#"}
                >
                    <Image 
                    alt="whatsapp logo"
                    src={'/icons/R.png'}
                    width={500}
                    height={500}
                    priority
                    className="w-[45px] h-[45px] rounded-full border border-[tan] bg-[#26282A] animate-bounce"
                    />
                </Link>
                
                <Link href={"#"}>
                    <Image 
                    alt="whatsapp logo"
                    src={'/icons/x.jfif'}
                    width={500}
                    height={500}
                    priority
                    className="w-[40px] h-[40px] rounded-full border border-[tan] bg-[#26282A] animate-spin"
                    />
                </Link>
            </div>
        </>
    )
}