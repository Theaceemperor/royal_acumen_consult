'use client'
import Image from "next/image";
import React from "react";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';

export default function MySwiper() {
  React.useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
          delay:2000,
          disableOnInteraction: false,
      },
      loop: true,
      effect: 'cube',

  
      pagination: {
          el: "swiper-pagination",
          clickable: true,
      },
  
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      scrollbar: {
          el: 'swiper-srollbar',
      }
    });
  })

    return (
        <section className="w-20">
            {/* <!-- Slider main container --> */}
            <div className="container"> 
              <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Image src={'/images/faxx.png'}
                        width={1800} height={912} 
                        className="w-auto h-auto"
                        alt="our client"/>
                    </div>
                    <div className="swiper-slide">
                        <Image src={'/images/immap.png'}
                        width={1800} height={912} 
                        className="w-auto h-auto"
                        alt="our client"/>
                    </div>
                    <div className="swiper-slide">
                        <span className="mt-4 flex items-center justify-center">
                          <h3>H-MEDIX</h3>
                        </span>
                    </div>
                    <div className="swiper-slide">
                        <h3>Mcray Stores</h3>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
              </div>
            </div>    

            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </section>
    )
}