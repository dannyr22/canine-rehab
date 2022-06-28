import * as React from "react"
import "../styles/global.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import dogsOne from "../images/dogs-1.jpg"
import dogsTwo from "../images/dogs-2.jpg"
import dogsThree from "../images/dogs-3.jpg"
import dogsFour from "../images/dogs-4.jpg"
import martinImage from "../images/martin-1.jpeg"
import saphImage from "../images/saph-1.jpeg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="pageContent homepage">
          <Swiper
            modules={[Autoplay, Pagination]}
            className="swiper-container"
            spaceBetween={50}
            slidesPerView={1}
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
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsTwo} alt="dogs two" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsThree} alt="dogs Three" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dogsFour} alt="dogs four" />
            </SwiperSlide>
            ...
          </Swiper>
          <div className="main">
            <h1>K-9 Rehabilitation</h1>
            <div className="main--about">
              <h3>About Us</h3>
              <div className="main--about_person">
                <div className="main--about_bio">
                  <h4>Martin</h4>
                  <div className="main--about_text">
                    <p>Hi there I'm Martin and I’m a dog behaviourist.</p>
                    <p>
                      I have always loved dogs. As a young boy I grew up
                      alongside German Shepherd dogs and their behaviour and
                      interaction was a constant source of fascination to me.
                      This passion has followed me into adulthood and I now have
                      3 dogs of my own, an Akita, a Cocker Spaniel, and a Pug.
                    </p>
                    <p>
                      In 2009 I studied canine behaviour, psychology and posture
                      to advanced level. These qualifications teamed with years
                      of hands-on experience have allowed me to develop a
                      successful dog training service. Working closely with both
                      dog and owner I have enjoyed helping to build partnerships
                      of trust and respect between owners and their canine
                      friends in order to enhance the bond between them.
                    </p>
                    <p>
                      I have also had the honour of working with wolf watch UK.
                      With being introduced to a pair of their wolves. A big
                      thank you to Dr Isla Fishburn for giving me that amazing
                      experience. Also working her course of animal behaviour
                      and wellbeing.
                    </p>
                    <p>
                      The key elements that underpin my dog training service
                      are:
                    </p>
                    <p>
                      Helping the owner to demonstrate effective leadership to
                      the dog
                    </p>
                    <p>
                      Understanding why it’s important not to treat a dog as a
                      human
                    </p>
                    <p>
                      Achieving a calm and balanced relationship between the
                      owner and the dog
                    </p>
                  </div>
                </div>
                <div className="main--about_image-container">
                  <div className="main--about_image-wrapper">
                    <img src={martinImage} alt="martin" />
                  </div>
                </div>
              </div>
              <div className="main--about_person">
                <div className="main--about_bio">
                  <h4>Saph</h4>
                  <div className="main--about_text">
                    <p>Hi my name is Saph, and I'm a dog handler.</p>
                    <p>
                      I’ve been brought up with animals all my life; dogs, cats,
                      horses... you name it! Ever since I was born, I was
                      brought up with my family dog called Suki, she was an
                      Akita. So, growing up with her I was drawn to learning the
                      understanding of the dog’s mind, and what makes them tick.
                    </p>
                    <p>
                      When I was 16, I worked part time at a vets as a
                      receptionist and assistant nurse, which helped me gain
                      more experience and knowledge about all types of animals.
                      I started my dog training course when I was 17 as an
                      apprentice, I done training courses through the apprentice
                      company Kiets, and I studied animal behaviour and
                      wellbeing. I’ve also done an animal psychology and
                      wellbeing course with zoologist Dr Isla Fishburn.
                    </p>
                    <p>
                      I have also had the honour of working with wolf watch UK.
                      With being introduced to a pair of their wolves. A big
                      thank you to Dr Isla Fishburn for giving me that amazing
                      experience. Also working her course of animal behaviour
                      and wellbeing.
                    </p>
                    <p>
                      My job role at K-9 Rehabilitation is running the doggy
                      day-care throughout the day. I manage and interact with
                      the pack, teaching them rules, boundaries and limitations
                      within play. This is to help them become more social
                      within the outside world and other dogs they’ll meet
                      outside of K-9 Rehabilitation. I work alongside my dad,
                      with helping the dogs needing rehabilitating, also showing
                      structure, and guidance in how to be a true dog.
                    </p>
                  </div>
                </div>
                <div className="main--about_image-container">
                  <div className="main--about_image-wrapper">
                    <img src={saphImage} alt="saph" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
