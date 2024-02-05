import React, { useState, useEffect } from 'react'
// css
import "../../scss/PriceDescription.scss"


function PriceDescription({
    prName,
    description,
    grade,
    oriprice,
    price
}) {


    const [contentNum, setContentNum] = useState(Number((oriprice / price).toFixed(2)));


    return (
        <>
            <div className='priceDescription'>
                <strong className='d-block mb-3 mt-3'>{prName}</strong>
                <p className='mb-2'>{description}</p>
                <div className='d-flex justify-content-between mb-4'>
                    <span className='con1'><i class="bi bi-star-fill me-1"></i>{grade}</span>
                    <span className='con2'>{oriprice}원</span>
                    <div>
                        <span className='con3'>{contentNum}%</span>
                        <span className='con4'>{price.toLocaleString()}원</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PriceDescription
