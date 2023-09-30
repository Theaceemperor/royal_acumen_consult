import Link from "next/link";
import { GiSpades } from "react-icons/gi";



export function PowerBtn() {

    return (
        <Link href={"https://spadeshub.vercel.app"} className="animate-pulse hover:animate-none transition ease-in-out delay-150 hover:-translate-y-1">
            <h2 className="flex justify-center items-center py-1 px-2 border-y border-[tan] rounded-md">Website powered by SP<GiSpades className="text-lg"/>DES</h2>
        </Link>
    )
}