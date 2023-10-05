
import AboutCol from "@/components/about-col";
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
            <AboutCol body={"Welcome to our website, where we specialize in public health consultation, general contracts and sales. Our team of experts is dedicated to providing top-notch services to ensure the success of your business endeavors and the well-being of your community. With years of experience in the public health field, we have the knowledge and skills necessary to help you navigate complex regulatory frameworks, implement effective health programs, and improve overall population health outcomes. We also offer a range of general contract and sales services, providing comprehensive support to businesses of all sizes and across industries. From contract negotiation and drafting to sales force management and training, we are committed to helping our clients achieve their goals and maximize profitability. At our core, we prioritize honesty, integrity, and excellence in all that we do. We work tirelessly to stay informed about the latest developments in our fields, and we leverage our expertise to ensure that our clients receive the most innovative and effective solutions possible.We invite you to explore our website and learn more about how we can support your public health, contract, and sales needs. Thank you for considering us as your trusted partner in achieving success."}
            header={"Royal Acumen Consult"}
            imageSrc={'/images/bg.jpg'}
            />

            <Services />

            <Reviews />

            <section className="flex items-center justify-center">
                <WriteReviews />
            </section>
        </>
    )
}