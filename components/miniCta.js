import Image from "next/image";
import ContactHead from "./contact-head";
import Link from "next/link";



export default function MainCta() {

    return (
        <section className='flex items-center justify-center'>
          <ContactHead header={"Get in touch with a consultant."}
          style={"text-sm"}>
            <div className="flex flex-row p-1 gap-8 items-center justify-center">
              <Link href={"#"}
              >
                <Image 
                alt="whatsapp logo"
                src={'/images/cta.jpg'}
                width={500}
                height={500}
                className="border border-[tan] w-[90px] h-[50px] rounded-xl"
                />
              </Link>
                
              <Link href={"#"}>
                <Image 
                  alt="whatsapp logo"
                  src={'/images/cta.jpg'}
                  width={500}
                  height={500}
                  className="border border-[tan] w-[90px] h-[50px] rounded-xl"
                  />
              </Link>
            </div>
          </ContactHead>
        </section>
    )
}