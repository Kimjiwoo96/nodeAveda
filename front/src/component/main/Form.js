import React, { useState } from 'react'
// css
import '../../scss/Form.scss'
import { Mycontainer } from "../../js/commonUi"
function Form() {


    let reg_required = /.{1,}/;
    let reg_name = /^[가-힣]+$/
    let reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    let reg_mobile = /^[0-9]{8,13}$/;


    //각 input의 value
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")


    //체크박스의 value값
    const [marketingChecked, setMarketingChecked] = useState(false)
    const [Essential, setEssential] = useState(false)

    // 각 input 유효성검사 
    const [nameCheck, setNameCheck] = useState(false)
    const [phoneNumberCheck, setPhoneNumberCheck] = useState(false)
    const [emailCheck, setEmailCheck] = useState(false)



    function buttonClick(e) {

        // console.log("이름", reg_name.test(name))
        // console.log("이메일>>>>>", reg_email.test(name))
        // console.log("휴대전화>>>>>", reg_mobile.test(name))

        //유효성검사
        if (!reg_name.test(name)) {
            setNameCheck(true)
        } else {
            setNameCheck(false)
        }

        if (!reg_mobile.test(name)) {
            setPhoneNumberCheck(true)
        } else {
            setPhoneNumberCheck(false)
        }

        if (!reg_email.test(name)) {
            setEmailCheck(true)
        } else {
            setEmailCheck(false)
        }

        if (Essential == false) {
            alert("개인정보수집동의에 동의해 주세요")
        }
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
                                name='username'
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
                                name='userphone'
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
                                name='useremail'
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
