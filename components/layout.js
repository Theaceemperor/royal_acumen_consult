import NavigationBar from "./NavBar";
import { PostAdsNotification } from "./ads";
import Cta from "./cta";
import Footer from "./footer";


export default function Layout({children}) {

    return (
        <>
            <NavigationBar />

            <PostAdsNotification />

            <main>{children}</main>

            <Cta />

            <Footer />
        </>
    )
}