import React from "react";
import NavigationBar from "./NavBar";
import { AdsNotification } from "./ads";
import Cta from "./cta";
import Footer from "./footer";


export default function Layout({children}) {

    const [ ads,setAds ] = React.useState([
        { id: 1, alertTitle: "Use Spades Dev!", body: "Did you know with just $150 you could get a professional website built with spades, and as fast as possible", link: 'https://spadeshub.vercel.app/web-development/application'},
        { id: 2, alertTitle: "Not enough?", body: "Not enough organic traffic? Get an SEO optimized react website. Spades will deliver!", link: 'https://x.com/@spadeshub'},
        { id: 3, alertTitle: "Found a consultant yet?", body: "Our consultation services are beyond compelling. Let's table that discussion now!", link: '/contact'},
    ]);

    return (
        <>
            <NavigationBar />

            {
                ads.map((item) => (
                    <AdsNotification 
                    key={item.id}
                    alertTitle={item.alertTitle}
                    alertLink={item.link}>
                        <span>{item.body}</span>
                    </AdsNotification>
                ))
            }

            <main>{children}</main>

            <Cta />

            <Footer />
        </>
    )
}