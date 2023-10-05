import React from "react";
import { Alert,AlertTitle,Collapse } from "@mui/material";
import { FaBuysellads } from "react-icons/fa";
import Link from "next/link";

// export function AdsNotification() {
//     const [open, setOpen] = React.useState(false);

//     React.useEffect(() => {
//       if (open == false) {
//         setTimeout(() => {
//           setOpen(true);
//         }, 20000);
//       };
      
//       if (open == true) {
//         setTimeout(() => {
//           setOpen(false);
//         }, 20000);
//       };
//     })
    
//     const [ ads,setAds ] = React.useState([
//       { id: 1, alertTitle: "Use Spades Dev!", body: "Did you know with just $150 you could get a professional website built with spades, and as fast as possible", link: 'https://spadeshub.vercel.app/web-development/application'},
//       { id: 2, alertTitle: "Not enough?", body: "Not enough organic traffic? Get an SEO optimized professional react website. Spades will deliver!", link: 'https://x.com/@spadeshub'},
//       { id: 3, alertTitle: "Post Ad!", body: "You can post an ad here!", link: '/contact'},
//     ]);
    
//     const handleShowAds = () => {
//         setInterval(() => {
//             ads
//         }, 10000);
//     }; handleShowAds();

//     const handleClose = () => {
//       setOpen(false);
//     };


//     return (
//         <div className="fixed bottom-[50vh] top-[50vh] right-0 z-20 w-[260px] sm:w-[300px]"
//         >
//               {
//                ads.map((item) => (
//             <Collapse in={open} key={item.id} >
//                 <Alert 
//                 icon={<FaBuysellads className="text-xl text-black"/>}
//                 style={{
//                   background:'tan',color:'black'
//                 }}
//                 onClose={handleClose}
//                 >
//                        <AlertTitle>{item.alertTitle}</AlertTitle>
//                       <Link href={item.link}>
//                         {item.body}
//                       </Link>
//                 </Alert>        
//             </Collapse>
//                 ))
//               }
//         </div>
            
//     )
// }   

export function AdsNotification3({open,handleClose}) {
    const ads = [
      { id: 3, alertTitle: "Post Ad!", body: "You can post an ad here!", link: '/contact'},
    ];

    return (
      <div>
        {
          ads.map((item) => (
            <Collapse in={open} key={item.id} >
                <Alert 
                icon={<FaBuysellads className="text-xl text-black"/>}
                style={{
                  background:'tan',color:'black'
                }}
                onClose={handleClose}
                >
                        <AlertTitle>{item.alertTitle}</AlertTitle>
                      <Link href={item.link}>
                        {item.body}
                      </Link>
                </Alert>        
            </Collapse>
          ))
        }
      </div>
    )
}   

export function AdsNotification2({open,handleClose}) {
    const ads = [
      { id: 2, alertTitle: "30% off sales consultations", body: "You get 30% off sales consultations when you book here, ", link: 'https://x.com/@spadeshub'},
    ];

    return (
      <div>
        {
          ads.map((item) => (
            <Collapse in={open} key={item.id} >
                <Alert 
                icon={<FaBuysellads className="text-xl text-black"/>}
                style={{
                  background:'tan',color:'black'
                }}
                onClose={handleClose}
                >
                        <AlertTitle>{item.alertTitle}</AlertTitle>
                      <Link href={item.link}>
                        {item.body} <strong>click to Book Now!</strong>
                      </Link>
                </Alert>        
            </Collapse>
          ))
        }
      </div>
    )
}   

export function AdsNotification({open,handleClose}) {
    const ads = [
      { id: 1, alertTitle: "Use Spades Dev!", body: "Did you know with just $200 you could get a professional website built with spades, and as fast as possible", link: 'https://spadeshub.vercel.app/web-development/application'},
    ];

    return (
      <div>
        {
          ads.map((item) => (
            <Collapse in={open} key={item.id} >
                <Alert 
                icon={<FaBuysellads className="text-xl text-black"/>}
                style={{
                  background:'tan',color:'black'
                }}
                onClose={handleClose}
                >
                        <AlertTitle>{item.alertTitle}</AlertTitle>
                      <Link href={item.link}>
                        {item.body}
                      </Link>
                </Alert>        
            </Collapse>
          ))
        }
      </div>
    )
}   

export function PostAdsNotification() {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    
    const handleFirstClose = () => {
      setOpen1(false);
    };
    
    const handleSecondClose = () => {
      setOpen2(false);
    };
    
    const handleThirdClose = () => {
      setOpen3(false);
    };
    
    // SLOT METHOD FOR ADS, A FUNCTION THAT ALLOWS ADS CHECK FOR OPEN SLOTS EVERY 50 SECS SO THEY CAN RUN. 
    //THE PROCESS IS THEREFORE AUTOMATED AND RANDOM (IT IS NOT SERIAL OR SEQUENCIAL).
    const handleOpen = () => {
      setInterval(() => {
        handleSecondClose();
        handleThirdClose();
        setOpen1(true);
      }, 10000);
      
      setInterval(() => {
        handleFirstClose();
        handleThirdClose();
        setOpen2(true);
      }, 20000);
      
      setInterval(() => {
        handleFirstClose();
        handleSecondClose();
        setOpen3(true);
      }, 30000);
    }
    
    React.useEffect(() => {
      handleOpen();
    },[]);

    return (
        <div className="fixed bottom-[50vh] top-[50vh] right-0 z-20 max-w-[300px] transition duration-500 ease-in">
              { open1 ? <AdsNotification open={open1} handleClose={handleFirstClose} /> : null }
              { open2 ? <AdsNotification2 handleClose={handleSecondClose} open={open2} /> : null } 
              { open3 ? <AdsNotification3 open={open3} handleClose={handleThirdClose} /> : null }
        </div>
            
    )
}   