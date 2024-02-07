import React, { useState, useEffect } from 'react'
import styleHd from "../../scss/Hd.module.scss"
import { Nav, Navbar } from 'react-bootstrap';
import { naviObj } from "../../js/commonData"
import { Link } from 'react-router-dom';




function Hd({
    sharedState
}) {
    const [liOpen, setLiOpen] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);




    const backgroundColor = scrollPosition > 100 ? '#FFF' : 'rgb(255, 255, 255, 0.6)';

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);






    return (
        <>
            <header
                className={`${styleHd.hd} fixed-top`}
                style={{
                    backgroundColor: windowWidth < 991 ? "#fff" : backgroundColor
                }}
            >
                <div className={`${styleHd.minibanner} text-center`}>
                    <a href="https://www.avedakorea.com/exclusive-offers" target="_blank" rel="noopener noreferrer">
                        <span className='d-none d-lg-inline me-3 text-white'>공식몰 첫 구매시 15% 할인!</span>
                    </a>
                </div>
                <Navbar expand="lg">
                    <div className='container-xl px-0 px-lg-4'>
                        <Navbar.Brand href="/" className={`${styleHd.logo} ms-3 ms-lg-0 pb-3 pb-lg-0`}>
                            <Link to="/"><img src="/img/logo.png" alt="아베다 로고" /></Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />

                        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between align-items-center d-lg-flex flex-grow-1 border-top col '>
                            <Nav className={`${styleHd.gnbs} px-3 px-lg-0`}>
                                {
                                    naviObj.map((el, idx) => (
                                        <Nav.Item as="li" key={idx} className={`position-relative ${styleHd.gnbli} ${idx < (naviObj.length - 1) ? `px-lg-4` : 'ps-lg-4'}`} >
                                            <Link to="/" className={`px-0 ${styleHd.bigMenu}`}
                                                onClick={() => {
                                                    setLiOpen(idx)
                                                }}>
                                                {el.title}
                                            </Link>
                                            <ul className={`m-0 ms-0 ps-0 position-absolute ${liOpen == idx ? styleHd.open : ""}`}>
                                                {
                                                    naviObj[idx].menus.map((e, i) => {
                                                        return (
                                                            <li>
                                                                <Nav.Link
                                                                    href={e.href}
                                                                    className={`px-0 ${styleHd.smallMenu}`}
                                                                    key={i}
                                                                >
                                                                    {e.title}
                                                                </Nav.Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </Nav.Item>
                                    ))
                                }
                            </Nav>
                            <Nav className={`${styleHd.icons} px-3 px-lg-0 d-flex justify-content-end flex-row`}>
                                <Link to="/shop" className={`${styleHd.iconsLink}`}>
                                    <p><i class="bi bi-geo-alt"></i>Shop</p>
                                </Link>

                                <Link to="/cart" className={`${styleHd.iconsLink}`}>
                                    <p className='position-relative'><i class="bi bi-cart"></i>Cart
                                        <span className='position-absolute bg-dark text-white end-0 top-0'>{sharedState.length > 0 ? sharedState.length : null}</span>
                                    </p>
                                </Link>

                                <Link to="/login" className={`${styleHd.iconsLink}`}>
                                    <p><i class="bi bi-person-circle"></i>Mypage</p>
                                </Link>


                                <Link to="/registration" className={`${styleHd.iconsLink}`}>
                                    <p>상품등록</p>
                                </Link>


                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar >
            </header >
        </>
    )
}

export default Hd