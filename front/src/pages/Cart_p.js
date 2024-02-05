import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import PriceDescription from "../component/product/PriceDescription"

// css
import "../scss/Cart_p.scss"

function Cart_p({
    texts,
    myclassStyle,
    sharedState,
    setSharedState,
    content
}) {



    const selectedItemsRef = useRef([]);




    const handleCheckboxChange = (idx) => {
        {/*
const isChecked = sharedState.includes(idx);

        if (isChecked) {
            setSharedState((prevSharedState) => prevSharedState.filter((itemIdx) => itemIdx !== idx));
        } else {
            setSharedState((prevSharedState) => [...prevSharedState, idx]);
        }*/ }
    };

    const handleDeleteSelectedItems = () => {
        {/** 
    const selectedItems = selectedItemsRef.current;
        console.log('Selected Items:', selectedItems);
        
    };*/}
    }



    useEffect(() => {

        selectedItemsRef.current = sharedState;
        console.log(sharedState, content);
    }, [sharedState, content]);

    return (
        <div style={{ marginTop: myclassStyle.conmargin }}>
            <h4 className={`${myclassStyle.h4class}`}>{texts.text}</h4>


            <section>
                <div className=' cart_top d-flex justify-content-between align-items-center'>
                    <p>상품수량 : {sharedState && sharedState.length}</p>
                    <button className='subBtn' onClick={handleDeleteSelectedItems}>선택상품삭제</button>
                </div>

                <div className='cartG d-flex justify-content-between align-items-center'>
                    <div>
                        <input type="checkbox" className='me-2' />
                        <label htmlFor="">전체선택</label>
                    </div>

                    <p className='mb-0'>상품상세정보</p>

                    <p className='col-1 text-center'>합계</p>
                </div>



                {content && content.filter((v) => sharedState.includes(v.idx)).map((el, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className='cartCon d-flex justify-content-between align-items-center'>
                                <div className='text-center col-1'>
                                    <input
                                        type="checkbox"
                                        value={el.idx}

                                        checked={selectedItemsRef.current.includes(el.idx)}
                                        onChange={() => handleCheckboxChange(el.idx)}
                                    />

                                </div>
                                <div className='cartTextCon d-flex align-items-center flex-grow-1'>
                                    <img src={el.img} alt="" className='h-100' />


                                    <div className='d-flex justify-content-between align-items-start flex-column h-100'>
                                        <PriceDescription
                                            prName={el.prName}
                                            description={el.description}
                                            grade={el.grade}
                                            oriprice={el.oriprice}
                                            price={el.price}
                                        ></PriceDescription>
                                        <div>
                                            +,- 버튼영역
                                        </div>
                                    </div>
                                </div>
                                <p className='col-1 text-center'>126,000 원</p>
                            </div>
                        </React.Fragment>
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