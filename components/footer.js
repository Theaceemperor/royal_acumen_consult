import Link from "next/link";
import { PowerBtn } from "./Btn";
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6'

export default function() {

    return (
        <>
            <section id="footer" className='bottom-0 left-0 right-0 p-1 my-5 mx-2 rounded-md bg-[#252324] text-[tan] border-y-2 border-[tan]'>
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <h3 className='underline decoration-[tan]'>What we do!</h3>
                    <p>We offer top-notch public health consultation, general contracts and sales. Feel free to contact us if you have questions regarding a service</p>
                    <ul className='flex flex-row justify-around items-center text-sm gap-5 sm:text-lg'>
                    <li><Link href={"/contact#footer"}>© 2023 Royal Acumen</Link></li>
                    <li><Link href={"/terms"}>T & C</Link></li>
                    <li><Link href={"/privacy policy"}>Privacy Policy</Link></li>
                    </ul>
                    <PowerBtn /> 
                </div>
            </section>
            <div className="bottom-0 right-0 fixed flex flex-col h-[100px] p-1 gap-1 items-center justify-center z-20">
                <Link href={"#cta"}
                className="w-[45px] h-[45px] rounded-full border border-[tan] bg-[#252324] animate-bounce flex items-center justify-center"
                >
                    <RiCustomerService2Fill
                    className="text-4xl text-[tan]"
                    />
                </Link>
                
                <Link href={"#cta"}
                className="w-[45px] h-[45px] rounded-full border border-[tan] bg-[#252324] animate-spin flex items-center justify-center"
                >
                   <FaXTwitter className='text-[tan] text-3xl' />
                </Link>
            </div>
        </>
    )
}