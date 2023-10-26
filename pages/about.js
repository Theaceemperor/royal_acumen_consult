
import AboutCol, { AboutCol2 } from "@/components/about-col";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import WriteReviews from "@/components/writeReview";
import Head from "next/head";



export default function AboutUs() {

    return (
        <>
            <Head >
                <link rel="shortcut icon" href="/raconsult.ICO" type="image/x-icon" />
                <title>Royal Acumen Consult | About Us </title>
                <meta name="description" content="royal acumen consult is dedicated to providing top-notch services to ensure the success of your business." />
            </Head>
            <AboutCol body={<blockquote>
                <p>
                Welcome to our website, where we specialize in effective general contracts, products and sales consultations. Our team of experts is dedicated to providing top-notch services to ensure the success of your business endeavors and the well-being of your community. With years of experience in providing effective client tailored consultations, we have the knowledge and skills necessary to help you navigate complex regulatory frameworks, implement effective contract programs, and improve products and sales outcomes. We offer a range of general contract and sales services, providing comprehensive support to businesses of all sizes and across industries. From contract negotiation and drafting to sales force management and training, we are committed to helping our clients achieve their goals and maximize profitability. 
                <br />
                At our core, we prioritize honesty, integrity, and excellence in all that we do. We work tirelessly to stay informed about the latest developments in our fields, and we leverage our expertise to ensure that our clients receive the most innovative and effective solutions possible.We invite you to explore our website and learn more about how we can support your public health, contract, and sales needs. Thank you for considering us as your trusted partner in achieving success.
                </p>
            </blockquote>}
            header={"Royal Acumen Consult"}
            />
            
            <AboutCol2 body={<blockquote>
                <p>
                To use our expertise, knowledge, data-driven decisions, energy and passion to provide:
                </p>
                <ol className="p-3 flex flex-col gap-3">
                    <li>1. Premium brand products and services of superior quality.</li>
                    <li>2. Cost effective product solutions for the right application.</li>
                    <li>3. Leading 24/7 long term support for our products and services to our clients.</li>
                    <li>4. Effective unrivalled consultation services personalized for each dealing clients to maximize potential.</li>
                </ol>
            </blockquote>}
            header={"Our Mission"}
            imageSrc={"bg-[url('/images/16.jpg')] bg-cover bg-center"}
            blockId={'mission'}
            linkHead={'mission'}
            >
                <p>
                    To ensure due regard to safety and the environment. 
                    <br />
                    To deliver value for our customers and stakeholders alike, as we also put there clients therein into consideration.
                </p>
            </AboutCol2>

            <Services />
            
            <AboutCol2 body={<blockquote>
                <p>
                    To be recognized by our clients and staakeholders as the preferred and trusted supply partner whose service standards exceed those of our competitors
                </p>
            </blockquote>}
            header={"Our Vision"}
            imageSrc={"bg-[url('/images/15.jpg')] bg-cover bg-center"}
            blockId={'vision'}
            linkHead={'vision'}
            >
                <aside className="p-1">
                    <h4 className="text-center my-2 font-bold underline underline-offset-4">Core Values</h4>
                    <ol className="p-2 flex flex-col gap-3">
                        <li><b>Opportunity: </b> 
                            <p>We are curious, we enjoy exploring opportunities with an open mind and optimistic outloook.</p>
                        </li>
                        <li><b>Alliances: </b> 
                            <p>Alliances with like-minded partners expand our horizons, elevate our ideas, boost our stability and speed up our progress.</p>
                        </li>
                        <li><b>Strength: </b> 
                            <p>Strong history, integrity, people, capital, and character: these strengths underpin our success</p>
                        </li>
                        <li><b>Impact: </b> 
                            <p>We succeed most when we have a positive impact on others and on our world.</p>
                        </li>
                    </ol>
                </aside>
            </AboutCol2>
{/* 
            <Reviews />

            <section className="flex items-center justify-center">
                <WriteReviews />
            </section> */}
        </>
    )
}