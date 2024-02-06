import React, { useState } from 'react'
// api
import axios from 'axios';
import { productApi } from "../../api/product";
// css
import '../../scss/Form.scss'
import { Mycontainer } from "../../js/commonUi"
function Form() {


    let reg_required = /.{1,}/;
    let reg_name = /^[가-힣]+$/
    let reg_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    let reg_mobile = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;




    //각 input의 value
    const [name, setName] = useState("지우")
    const [phoneNumber, setPhoneNumber] = useState("01087656288")
    const [email, setEmail] = useState("wisejiwoo96@naver.com")


    //체크박스의 value값
    const [marketingChecked, setMarketingChecked] = useState(false)
    const [Essential, setEssential] = useState(false)

    // 각 input 유효성검사 
    const [nameCheck, setNameCheck] = useState(false)
    const [phoneNumberCheck, setPhoneNumberCheck] = useState(false)
    const [emailCheck, setEmailCheck] = useState(false)






    // const myForm = async (data) => {
    //     try {
    //         console.log("여긴 리엑트>>>>>>>", data)
    //         const response = await productApi("myform", data);


    //     } catch (error) {
    //         console.log(error);
    //     }
    // };





    async function buttonClick(e) {

        // console.log("이름", reg_name.test(name), name)
        // console.log("휴대전화>>>>>", reg_mobile.test(phoneNumber), phoneNumber)
        // console.log("이메일>>>>>", reg_email.test(email), email)
        // console.log("개인정보동의>>>>>", Essential)


        // console.log("1111", nameCheck)
        // console.log("2222", phoneNumberCheck)
        // console.log("3333", emailCheck)
        // console.log("4444", Essential)



        try {
            e.preventDefault();

            if (nameCheck || phoneNumberCheck || emailCheck || !Essential) {
                alert("필수 정보를 올바르게 입력해주세요");
                return;
            }

            // 서버에 전송할 데이터 생성
            const formData = {
                u_name: name,
                u_phone: phoneNumber,
                u_email: email,
                marketing: marketingChecked
            };
            console.log("리엑트 formData>>>>>", formData)
            // productApi 호출
            const response = await productApi('myform', formData);

            // 서버 응답 확인
            console.log('서버 응답:', response);

            // 성공적으로 처리된 경우 추가 로직 작성

        } catch (error) {
            console.error('서버 요청 오류:', error);
        }



        // if (reg_name.test(name) == true && reg_mobile.test(phoneNumber) == true && reg_email.test(email) == true && Essential !== false) {
        //     setNameCheck(false)
        //     setPhoneNumberCheck(false)
        //     setEmailCheck(false)

        //     setName("")
        //     setPhoneNumber("")
        //     setEmail("")

        //     alert("폼 신청이 완료되었습니다.")
        //     myForm()
        // } else {

        //유효성검사
        // if (reg_name.test(name) == true) {
        //     setNameCheck(false)
        // } else {
        //     setNameCheck(true)
        // }

        // if (reg_mobile.test(phoneNumber) == true) {
        //     setPhoneNumberCheck(false)
        // } else {
        //     setPhoneNumberCheck(true)
        // }

        // if (reg_email.test(email) == true) {
        //     setEmailCheck(false)
        // } else {
        //     setEmailCheck(true)
        // }

        // if (Essential == false) {
        //     alert("개인정보수집동의에 동의해 주세요")
        // }
        // }
    }

    const marketingCheckboxChange = (event) => {
        setMarketingChecked(!marketingChecked);
    }



    return (
        <Mycontainer style={{ marginBottom: "0" }}>
            <form action="" method='POST' className='myForm'>
                <div className='myFormDiv w-md-3'>
                    <h5 className='text-center mb-5'>모발&두피 상태 체크 후 응모하면 그에 맞는 상품을 드려요!</h5>
                    <div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="username">이름</label>
                            <input
                                type="text"
                                name='u_name'
                                id='username'
                                className='w-100'
                                placeholder='홍길동'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                            {nameCheck && <p className='effectiveness mt-2'>이름이 올바른지 확인해주세요</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="userphone">휴대전화번호</label>
                            <input
                                type="number"
                                name='u_phone'
                                id='userphone'
                                className='w-100'
                                placeholder='01012346789'
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value)
                                }}
                            />
                            {phoneNumberCheck && <p className='effectiveness mt-2'>휴대전화번호의 형식이 올바른지 확인해주세요</p>}
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="useremail">이메일</label>
                            <input
                                type="text"
                                name='u_email'
                                id='useremail'
                                className='w-100'
                                placeholder='aaa@naver.com'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            {emailCheck && <p className='effectiveness mt-2'>이메일의 형식이 올바른지 확인해주세요</p>}
                        </div>
                    </div>

                    <div className='d-flex justify-content-left align-items-center'>
                        <div className='d-flex justify-content-left align-items-center' style={{ marginRight: "20px" }}>
                            <input
                                type="checkbox"
                                name="information"
                                id="information"
                                checked={Essential}
                                onClick={() => {
                                    setEssential(!Essential)
                                }}
                            />
                            <label htmlFor="information">개인정보수집동의</label>
                        </div>
                        <div className='d-flex justify-content-left align-items-center'>
                            <input
                                type="checkbox"
                                name="marketing"
                                id="marketing"
                                value={marketingChecked}
                                onChange={(event) => {
                                    marketingCheckboxChange(event)
                                }}
                            />
                            <label htmlFor="marketing">마케팅수신정보동의 </label>
                            <span className='choice'>(선택)</span>
                        </div>
                    </div>

                    <button
                        className='w-100 mt-4'
                        type='button'
                        onClick={(e) => {
                            buttonClick(e);
                        }}
                    >신청하기</button>
                </div>
            </form>
        </Mycontainer>
    )
}

export default Form
