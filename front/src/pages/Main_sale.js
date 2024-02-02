import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PriceDescription from '../component/product/PriceDescription';
import { Mycontainer } from "../js/commonUi";
import { productApi } from "../api/product"
import axios from 'axios';

function Main_sale({
    slice,
    texts,
    myclassStyle
}) {

    const [content, setCont] = useState([]);
    const [cartImgHover, setCartImgHover] = useState([]);
    const [conSlice, setConSlice] = useState(slice);





    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const response = await productApi("product");
                setCont([...response.data]);
                setCartImgHover(new Array(response.data.length).fill('bi bi-cart'));
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataAndSetState();
    }, []);






    const handleCartHover = (idx) => {
        const updatedHoverState = [...cartImgHover];
        updatedHoverState[idx] = 'bi bi-cart-fill';
        setCartImgHover(updatedHoverState);
    };

    const handleCartLeave = (idx) => {
        const updatedHoverState = [...cartImgHover];
        updatedHoverState[idx] = 'bi bi-cart';
        setCartImgHover(updatedHoverState);
    };

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
                    {content.map((el, idx) => (
                        <div
                            key={el.idx}
                            className='col-lg-3 col-md-6'
                        >
                            <Link to='' className=''>
                                <div className='position-relative'>
                                    <img src={el.img} alt='' className='img-fluid rounded-2 w-100' />
                                    <span
                                        onMouseEnter={() => handleCartHover(idx)}
                                        onMouseLeave={() => handleCartLeave(idx)}
                                        className='cart position-absolute'
                                        style={{ top: '10px', left: '10px' }}
                                        onClick={() => {
                                            alert('장바구니에 추가되었습니다.');
                                        }}
                                    >
                                        <i
                                            className={cartImgHover[idx]}
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
