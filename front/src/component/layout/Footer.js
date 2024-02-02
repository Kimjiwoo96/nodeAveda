import React from 'react'
// css
import "../../scss/Footer.scss"

function Footer() {
    return (
        <>
            <section className='footerWrap p-4'>
                <div className='footerLeft justify-content-between pb-3'>
                    <div className='d-flex'>
                        <img src="/img/footerLogo.png" alt="아베다 푸터 로고" className='footerLogo me-5 d-none d-lg-block' />

                        <dl className='me-5 d-none d-md-block'>
                            <dt className='mb-2'>프로페셔널</dt>
                            <dd>아베다 살롱 오픈문의</dd>
                            <dd>아베다 퓨어프로</dd>
                        </dl>

                        <dl className='me-5'>
                            <dt className='mb-2'>도움이 필요하신가요?</dt>
                            <dd>고객관리지원팀: <span className='d-block d-md-inline'>CALL+ 02-6971-3022</span></dd>
                            <dd>채용정보</dd>
                        </dl>
                    </div>

                    <div className='d-flex flex-column align-items-end'>
                        <p className='mb-2'>STAY CONNECTED</p>
                        <div className='d-flex justify-content-end'>
                            <p><a href="https://www.facebook.com/Avedakr/"><i class="bi bi-facebook"></i></a></p>
                            <p className='ms-3'><a href="https://www.instagram.com/avedakr/"><i class="bi bi-instagram"></i></a></p>
                            <p className='ms-3'><a href="https://www.youtube.com/channel/UCuUnG22V-SZZEp63yjWN6aw"><i class="bi bi-youtube"></i></a></p>
                        </div>
                    </div>
                </div>



                <div className='footerRight pt-4'>
                    <div className='mb-3'>
                        <ul className='d-flex m-0 p-0'>
                            <li className='me-3'>개인정보처리방침</li>
                            <li>이용약관</li>
                        </ul>
                        <p className='copyright'>COPYRIGHT © AVEDA CORP. ALL RIGHTS RESERVED.</p>
                    </div>
                    <p>이엘씨에이한국(유) 대표 TENG, HSIAO-HUA 서울시 강남구 강남대로 382 (역삼동) 메리츠타워9층, 06232 | 사업자등록번호: 211-81-71889</p>
                    <p>통신판매업신고: 강남-15737호 | 사업자정보조회 | 에스크로 가입 확인 |</p>
                    <p>고객관리지원팀 : 02-6971-3200 | 호스팅서비스 사업자: ㈜엘지유플러스</p>
                </div>
            </section>
        </>
    )
}

export default Footer
