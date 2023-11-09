import { ButtonPopper } from "@/components/popper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Careers() {
    const router = useRouter();

    return (
        <>
            <section>
                <blockquote id="work-with-us" className=" flex flex-col gap-1 items-center justify-center p-2">
                    <h3><Link href={'#work-with-us'}>WORKING AT ROYAL ACUMEN</Link></h3>
                    <span className="w-28 border-t border-[tan] mt-3 text-transparent">------------</span>
                </blockquote>

                <p className="p-5">The committed full-time professionals and tradesmen on Royal Acumen work sites and in our offices in the various states of operations share a common goal to deliver top-notch projects that delight our clients and strengthen our communities. We know that to be the refrence contractor in Nigeria & Africa in general, we need the best people. Royal Acumen is commited to attracting and developing the industry's top talent.
                </p>
                <br />
                <p className="p-3">
                    Our people not only mmake Royal Acumen a great place to work, but a company with which our business partners want to associate. Hard-working and taking pride in what they do, they are living examples of our core values. We wouldn't be the company we are today without them. 
                </p>
                <br />
                <div className="flex items-center justify-center"><ButtonPopper /></div>

                <div id="our-team" className="my-10 flex flex-col items-center justify-center gap-5 p-1">
                    <blockquote className=" flex flex-col gap-1 items-center justify-center p-2">
                        <h3><Link href={'#our-team'}>MEET OUR TEAM</Link></h3>
                        <span className="w-28 border-t border-[tan] mt-3 text-transparent">------------</span>
                    </blockquote>

                    <blockquote className="w-[fit-content] text-center flex flex-col gap-2 pb-2 rounded-md shadow-sm shadow-[tan] border">
                        <Image 
                        src={'/images/6.jpg'}
                        alt="worker image"
                        width={1020}
                        height={920}
                        className="w-80 h-auto border-b-2 border-[tan]"
                        />
                        <h5>John Doe</h5>
                        <small>Operations Management</small>
                    </blockquote>
                    
                    <blockquote className="w-[fit-content] text-center flex flex-col gap-2 pb-2 rounded-md shadow-sm shadow-[tan] border">
                        <Image 
                        src={'/images/14.jpg'}
                        alt="worker image"
                        width={1020}
                        height={920}
                        className="w-80 h-auto border-b-2 border-[tan]"
                        />
                        <h5>Jsmith</h5>
                        <small>Projects Control</small>
                    </blockquote>
                </div>

                {/* <div id="apply" className="my-10">
                    <blockquote className=" flex flex-col gap-1 items-center justify-center p-2">
                        <h3><Link href={'#apply'}>APPLY</Link></h3>
                        <span className="w-28 border-t border-[tan] mt-3 text-transparent">------------</span>
                    </blockquote>

                    <p className="p-5">
                        There is a reason that Royal Acumen is a rising star in the consultation industry: simply put, it's our people. We rely on the leadership, talents, and drive of our employees to bring great projects to light. Whether you are a recent graduate or have several years of experience, Royal Acumen offers opportunities for top-notch construction professionals, corporate professionals, tradespeople and product designers at all stages of their careers. 
                        <br />
                        Are you interested in becoming a part of our team? if yes, take the next step and start building your career with us today.
                    </p>
                    <article className="flex flex-col gap-3 items-center justify-center text-center mt-5">
                        <blockquote className=" flex flex-col gap-1 items-center justify-center p-2">
                            <h4>No vacancy is available at the moment!</h4>
                            <span className="w-28 border-t border-[tan] mt-3 text-transparent">------------</span>
                        </blockquote>
                        <button className="border-y border-tan shadow-sm shadow-[tan] rounded-md py-1 px-5"
                        onClick={() => router.push('mailto:info4rac@gmail.com')}>Contact us</button>
                    </article>
                </div> */}
            </section>
        </>
    )
}