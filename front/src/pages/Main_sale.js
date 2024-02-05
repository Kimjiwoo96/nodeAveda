import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PriceDescription from '../component/product/PriceDescription';
import { Mycontainer } from "../js/commonUi";


function Main_sale({
    content,
    texts,
    myclassStyle,
    sharedState,
    updateSharedState //장바구니 pk 상위컴포넌트 전달 메소드 
}) {


    console.log("나는 sharedState>>>>", sharedState)

    const pkarray = useRef([]);

    const pkcontrol = (cls, pk) => {
        const index = pkarray.current.indexOf(pk);

        if (cls == 'bi bi-cart-fill') {
            if (index === -1) {
                // Add to array if not already present
                pkarray.current.push(pk);

            }
        } else {
            // Remove from array if present
            if (index !== -1) {
                pkarray.current.splice(index, 1);
            }
        }
        updateSharedState([...pkarray.current])
    }

    useEffect(() => {
        // 장바구니 활성화하기
        console.log(content && content)
    }, [])




    return (
        <Mycontainer>
            <div className={`container-lg mx-auto`} style={{ marginTop: myclassStyle.conmargin }}>
                <div style={{ marginBottom: '20px' }}>
                    <div className={myclassStyle.divclass}>
                        <h4 className={myclassStyle.h4class}>{texts.text}</h4>
                        <Link to="/sale_p">
                            {texts.add}
                        </Link>
                    </div>
                </div>

                <div className='row mx-0'>
                    {content && content.map((el, idx) => (
                        <div
                            key={el.idx}
                            className='col-lg-3 col-md-6'
                        >
                            <Link to='' className=''>
                                <div className='position-relative'>
                                    <img src={el.img} alt='' className='img-fluid rounded-2 w-100' />
                                    <span
                                        className='cart position-absolute'
                                        style={{ top: '10px', left: '10px' }}
                                    >
                                        <i
                                            className="bi bi-cart"
                                            onClick={(elem) => {
                                                elem.target.className = elem.target.className == "bi bi-cart" ? "bi bi-cart-fill" : "bi bi-cart";

                                                pkcontrol(elem.target.className, el.idx)
                                                console.log('장바구니 pk', pkarray.current)
                                                { elem.target.className == "bi bi-cart" ? alert("상품을 삭제했습니다") : alert("장바구니에 추가했습니다") }
                                            }}
                                            style={{ color: '#ACACAC', fontSize: '1.3rem' }}
                                        ></i>
                                    </span>
                                </div>
                                <PriceDescription
                                    prName={el.prName}
                                    description={el.description}
                                    grade={el.grade}
                                    oriprice={el.oriprice}
                                    price={el.price}
                                ></PriceDescription>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Mycontainer>
    );
}

export default Main_sale;