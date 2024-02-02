import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// css
import "../scss/Cart_p.scss"

function Cart_p({
    texts,
    myclassStyle
}) {
    return (
        <div style={{ marginTop: myclassStyle.conmargin }}>
            <h4 className={`${myclassStyle.h4class}`}>{texts.text}</h4>


            <section>
                <div className=' cart_top d-flex justify-content-between align-items-center'>
                    <p>상품수량 : 3</p>
                    <button className='subBtn'>선택상품삭제</button>
                </div>

                <div className='cartG d-flex justify-content-between align-items-center'>
                    <div>
                        <input type="checkbox" className='me-2' />
                        <label htmlFor="">전체선택</label>
                    </div>

                    <p className='mb-0'>상품상세정보</p>

                    <p className='col-1 text-center'>합계</p>
                </div>



                {[1, 2, 3].map((el, i) => {
                    return (
                        <>
                            <div className='cartCon d-flex justify-content-between align-items-center'>
                                <div className='text-center col-1'>
                                    <input type="checkbox" />
                                </div>
                                <div className='cartTextCon d-flex align-items-center flex-grow-1'>
                                    <img src="/img/best/best1.png" alt="" className='h-100' />

                                    <div className='d-flex justify-content-between align-items-start flex-column h-100'>
                                        <h5>퓨어-어번던 스타일 프랩</h5>
                                        <p>가는 모발에 자연스러운 볼륨을 더해주는 스타일링-전 사용 제품</p>
                                        <p>42,000 원</p>
                                        <div>
                                            +,- 버튼영역
                                        </div>
                                    </div>
                                </div>
                                <p className='col-1 text-center'>126,000 원</p>
                            </div>
                        </>
                    )
                })}






                <div className='cartG d-flex justify-content-end align-items-center'>
                    <strong>합계 : 140,000원</strong>
                </div>

            </section>
        </div>
    )
}

export default Cart_p
