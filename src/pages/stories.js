import React from "react"
import Layout from "../components/layout"
import "../styles/global.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import dogsOne from "../images/dogs-1.jpg"

const stories = () => {
  return (
    <Layout>
      <div className="pageContent stories-page">
        <div className="main">
          <div className="main--intro">
            Here at K-9 Rehabilitation we've had tons of amazing stories and
            been able to help so many dogs, which is what we're here for. So as
            you can share in this as well we're listing our memorable stories
            here, so check them out and let us know what you think!
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="swiper-container"
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={dogsOne} alt="dogs one" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs two" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs Three" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsOne} alt="dogs four" />
              <div className="slide--info">This is the dog info</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  )
}

export default stories
