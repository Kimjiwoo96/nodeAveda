import React from 'react'
import Service from '../component/main/Service'
// css
import { Mycontainer } from "../js/commonUi"

function Main_service() {
    return (
        <Mycontainer>
            <div className="container d-md-flex justify-content-between mt-0" style={{ paddingLeft: "unset", paddingRight: "unset" }}>
                <Service
                    maintext={{
                        img: "/img/service1.png",
                        title: "모발 & 두피 상태 체크하기",
                        description: "당신의 모발에 대해 알려주시면, 아베다 전문가에 의해 살롱 서비스부터 데일리 스타일링을 위한 필수 제품까지 당신만을 위한 개인 맞춤형으로 추천해드립니다.",
                        buttontext: "두피상태 체크하기",
                        cls: "pe-md-2",
                        href: "https://www.avedakorea.com/hair-quiz/find-best-haircare-products"
                    }}
                ></Service >
                <Service
                    maintext={{
                        img: "/img/service2.png",
                        title: "당신을 위한 힐링 서비스",
                        description: "아베다 매장에서 특별한 서비스를 경험해보세요",
                        buttontext: "지금 예약하기",
                        cls: "ps-md-2",
                        href: "https://www.avedakorea.com/hair-quiz/find-best-haircare-products"
                    }}
                ></Service >
            </div>
        </Mycontainer>
    )
}

export default Main_service
