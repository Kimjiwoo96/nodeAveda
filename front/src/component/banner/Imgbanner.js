import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// import
import { bannerObj } from '../../js/commonData';

// css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MainStyle from '../../scss/Mainbanner.module.scss';
import { Mycontainer } from "../../js/commonUi"


function Mainbanner({ className }) {
    return (
        <Mycontainer>
            <div className={`${MainStyle.banner} ${className}`} id="slidebanner">

                <Swiper
                    className='position-relative'
                    modules={[Navigation, Pagination, Autoplay]}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".pagination"
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    loop={true}

                >
                    {
                        bannerObj.map((el) => {
                            return (
                                <SwiperSlide className={MainStyle.bannerSlide} key={el.id}>
                                    <div className={`${MainStyle.bgcontent}`}
                                        style={{
                                            backgroundImage: `url(${el.image})`,
                                            backgroundColor: "rgba(0,0,0,.5)",
                                            backgroundSize: "cover",
                                        }}>
                                        <div className={`${MainStyle.content} position-absolute container mx-auto text-center text-lg-start pt-5 pt-lg-0 `}>
                                            <h2 className='mt-5 mt-lg-0'>{el.title.split("|").map((e, i) => {
                                                return (
                                                    <strong key={i} className={`d-block bannerStrong${i}`}>{e}</strong>
                                                )
                                            })}
                                                <span className='d-md-none d-block'>모바일</span>
                                            </h2>

                                            <p>{el.txt}</p>
                                            <a href="#none" className={`${MainStyle.myadd} d-none d-lg-none d-md-inline-block py-1 px-4`}>
                                                더보기 +
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className={`${MainStyle.btn} position-absolute container d-flex`}>
                        <div className="pagination"></div>
                    </div>

                </Swiper>

            </div>
        </Mycontainer>
    )
}

export default Mainbanner;