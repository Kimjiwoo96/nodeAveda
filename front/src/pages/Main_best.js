import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Virtual } from 'swiper/modules';
import { bestObj } from "../js/commonData"

// css
import 'swiper/css';
import 'swiper/css/virtual';
import "../scss/MainBest.scss"
import { Mycontainer } from "../js/commonUi"

function Main_best() {

    const [bestBg, setBestBg] = useState(bestObj[0].image);
    const [bgClick, setBgClick] = useState(0);



    const handleSlideChange = (swiper) => {
        setBgClick(swiper.realIndex);
        setBestBg(bestObj[swiper.realIndex].image);
        // console.log(">>>>>>>>>>>", swiper);
    };

    const handleSlideClick = (index) => {
        // console.log("???>>>>>", index);
        setBgClick(index);
        setBestBg(bestObj[index].image);
    };

    return (
        <Mycontainer>
            <div
                className="bestWrap d-flex justify-content-center justify-content-md-between align-items-center container px-md-5"
                style={{
                    backgroundImage: `url(${bestBg})`
                }}
            >
                <div className='bestLeft ps-md-5'>
                    <div className='bestTitle'>
                        <h4>인기상품 랭킹</h4>
                        <p>아베다의 인기상품 <span style={{ color: "#7F9873", fontWeight: "800" }}>Top10</span>을 만나보세요!</p>
                    </div>
                    <div>
                        <Swiper
                            className='bestList'
                            spaceBetween={0}
                            slidesPerView={5}

                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => console.log(swiper)}
                            centeredSlides={true}
                            // loop={true}
                            // loopAdditionalSlides={3}
                            direction={'vertical'}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Virtual]}
                            style={{
                                height: "250px",
                            }}
                        >
                            {
                                bestObj.map((el, idx) => {
                                    return (
                                        <SwiperSlide
                                            className={`bestItems d-flex align-items-center justify-content-cleft pe-4 ${bgClick === idx ? 'swiper-slide-active' : ''}`}
                                            onClick={(e) => {
                                                handleSlideClick(idx)
                                            }}
                                            key={idx}
                                        >
                                            <span>{idx + 1}</span><p>{el.title}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <Link to="/best_p"><button>인기상품 더보러가기</button></Link>

                    </div>
                </div>
            </div >
        </Mycontainer >
    )
}

export default Main_best
