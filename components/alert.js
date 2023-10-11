import { Alert, AlertTitle } from "@mui/material";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiCustomerService2Fill, RiMailCheckFill } from "react-icons/ri";


export function SubscribeAlert({close}) {

    return (
        <div className="fixed top-[8vh] right-0 max-w-[300px]">
            <Alert
            style={{
                backgroundColor:'tan',color:'black',opacity:0.9
            }}
            onClose={close}
            icon={<RiMailCheckFill className="text-[#252324]" />}>
                <AlertTitle>Thank you for subscribing </AlertTitle>
                You have <strong>successfully</strong> joined our mailing list</Alert>
        </div>
    )
}

export function ReviewAlert({close}) {

    return (
        <div className="fixed top-[8vh] right-0 max-w-[300px]">
            <Alert
            style={{
                backgroundColor:'tan',color:'black',opacity:0.9
            }}
            onClose={close}
            icon={<BsFillPatchCheckFill className="text-[#252324]" />}>
                <AlertTitle>Review Sent</AlertTitle>
                Thank you for your feedback, your review was sent <strong>successfully!</strong></Alert>
        </div>
    )
}

export function ContactAlert({close}) {

    return (
        <div className="fixed top-[8vh] right-0 max-w-[300px]">
            <Alert
            style={{
                backgroundColor:'tan',color:'black',opacity:0.9
            }}
            onClose={close}
            icon={<RiCustomerService2Fill className="text-[#252324]" />}>
                <AlertTitle>Message Sent</AlertTitle>
                Your message was sent <strong>successfully!</strong></Alert>
        </div>
    )
}