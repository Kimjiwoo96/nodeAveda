import React, { useState, useEffect, useRef } from 'react';
import PriceDescription from "../component/product/PriceDescription";

// css
import "../scss/Cart_p.scss";

function Cart_p({
    texts,
    myclassStyle,
    sharedState,
    setSharedState,
    content
}) {
    const selectedItemsRef = useRef([]);
    const [quantities, setQuantities] = useState({});

    // const handleCheckboxChange = (idx) => {
    //     const updatedQuantities = { ...quantities };
    //     updatedQuantities[idx] = updatedQuantities[idx] || 1; // Set default quantity to 1
    //     setQuantities(updatedQuantities);

    //     const isChecked = selectedItemsRef.current.includes(idx);

    //     if (isChecked) {
    //         setSharedState((prevSharedState) => prevSharedState.filter((item) => item !== idx));
    //     } else {
    //         setSharedState((prevSharedState) => [...prevSharedState, idx]);
    //     }
    // };

    const handleDeleteSelectedItems = () => {
        // Logic to delete selected items
    };

    useEffect(() => {
        selectedItemsRef.current = sharedState;
    }, [sharedState]);

    const totalSelectedItemsPrice = content
        .filter((v) => sharedState.includes(v.idx))
        .reduce((total, item) => {
            const quantity = quantities[item.idx] || 1;
            return total + item.price * quantity;
        }, 0);


    return (
        <div style={{ marginTop: myclassStyle.conmargin }} className='container'>
            <h4 className={`${myclassStyle.h4class}`}>{texts.text}</h4>

            <section>
                <div className=' cart_top d-flex justify-content-between align-items-center mb-2'>
                    <p>상품수량 : {sharedState && sharedState.length}</p>
                    <button className='subBtn' onClick={handleDeleteSelectedItems}>선택상품삭제</button>
                </div>

                <div className='cartG d-flex justify-content-between align-items-center'>
                    <div>
                        <input type="checkbox" className='me-2' id="allCheck" />
                        <label htmlFor="allCheck">전체선택</label>
                    </div>

                    <p className='mb-0'>상품상세정보</p>

                    <p className='col-1 text-center'>합계</p>
                </div>

                {content.filter((v) => sharedState.includes(v.idx)).length > 0 ? (
                    content.filter((v) => sharedState.includes(v.idx)).map((el, i) => (
                        <div key={i} className='cartCon d-flex justify-content-between align-items-center'>
                            <div className='text-center col-1'>
                                <input
                                    type="checkbox"
                                    value={el.idx}
                                    checked={selectedItemsRef.current.includes(el.idx)}
                                // onChange={() => handleCheckboxChange(el.idx)}
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
                                    <div className='pricebtn d-flex align-items-center justify-content-center'>
                                        <p
                                            className='PMbtns minusBtn'
                                            onClick={() => {
                                                if (quantities[el.idx] > 1) {
                                                    setQuantities(prevQuantities => ({
                                                        ...prevQuantities,
                                                        [el.idx]: prevQuantities[el.idx] - 1
                                                    }));
                                                }
                                            }}
                                        >-</p>
                                        <input
                                            type='number'
                                            className='Quantity'
                                            value={quantities[el.idx] || 1}
                                            onChange={(e) => {
                                                const value = parseInt(e.target.value, 10);
                                                setQuantities(prevQuantities => ({
                                                    ...prevQuantities,
                                                    [el.idx]: isNaN(value) ? 1 : value
                                                }));
                                            }}
                                        />
                                        <p
                                            className='PMbtns plusBtn'
                                            onClick={() => {
                                                setQuantities(prevQuantities => ({
                                                    ...prevQuantities,
                                                    [el.idx]: (prevQuantities[el.idx] || 1) + 1
                                                }));
                                            }}
                                        >+</p>
                                    </div>
                                </div>
                            </div>
                            <p className='col-1 text-center'>{(el.price * (quantities[el.idx] || 1)).toLocaleString()} 원</p>
                        </div>
                    ))
                ) : (
                    <p className='text-center' style={{ fontWeight: "700", lineHeight: "200px" }}>장바구니가 비었습니다.</p>
                )}

                <div className='cartG d-flex justify-content-end align-items-center'>
                    <strong>총 합계 : {totalSelectedItemsPrice.toLocaleString()} 원</strong>
                </div>
            </section>
        </div>
    );
}

export default Cart_p;
