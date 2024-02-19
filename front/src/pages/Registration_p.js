import React from 'react'
import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form"
// import axios from 'axios';

// api
import { productApi } from "../api/api.ts";

// css 연결
import "../scss/Registration_p.scss"
// import { Mycontainer } from "../js/commonUi"


function Registration_p() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log("이게나와야해>>>>>>>>", data)
            const resultJson = await productApi('product', data)
            console.log("resultJson>>>", resultJson)
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <section style={{ backgroundColor: "#fbfbf9", width: "100%", padding: "30px 0px" }}>
                <form onSubmit={handleSubmit(onSubmit)} className='RegistrationForm container'>
                    {/* <input defaultValue="test" {...register("example")} className='border' /> */}
                    <h4>상품등록</h4>
                    <div className='kind'>
                        <label for="kind">상품종류</label>
                        <select {...register("kind")} id="kind">
                            <option value="샴푸">샴푸</option>
                            <option value="트리트먼트">트리트먼트</option>
                            <option value="바디">바디</option>
                            <option value="립">립</option>
                            <option value="클렌저">클렌저</option>
                            <option value="아이크림">아이크림</option>
                            <option value="세럼">세럼</option>
                        </select>
                    </div>


                    <div className='prName'>
                        <label for="prName">상품이름</label>
                        <input {...register("prName", { required: true })} className='border' id="prName" placeholder='상품명을 입력해주세요' />
                        {errors.exampleRequired && <span>상품이름을 입력해주세요</span>}
                    </div>


                    <div className='description'>
                        <label for="description">상품설명</label>
                        <input {...register("description", { required: true })} className='border' id="description" placeholder='상품설명을 적어주세요' />
                        {errors.exampleRequired && <span>상품설명을 입력해주세요</span>}
                    </div>

                    <section className='priceSection d-flex justify-content-between align-items-center'>
                        <div className='oriprice'>
                            <label for="oriprice" className='labelWidth'>원가</label>
                            <input {...register("oriprice", { required: true })} className='border' id="oriprice" placeholder='ex) 60000' />
                            {errors.exampleRequired && <span>원가를 입력해주세요</span>}
                        </div>

                        <div className='price'>
                            <label for="price" className='labelWidth'>소비자가</label>
                            <input {...register("price", { required: true })} className='border' id="price" placeholder='ex) 40000' />
                            {errors.exampleRequired && <span>소비자가를 입력해주세요</span>}
                        </div>
                    </section>

                    <div>
                        <label for="img" className='labelWidth'>상품이미지</label>
                        <input type="text"{...register("img", { required: true })} className='border' id="img" placeholder='이미지 외부경로를 입력해주세요 ' />
                        {errors.exampleRequired && <span>이미지 경로를 입력해주세요</span>}
                    </div>


                    <div className='btns d-flex justify-content-between align-items-center'>
                        <input type="submit" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Registration_p