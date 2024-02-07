import React from 'react'

function Login_p() {
    return (
        <>
            <form action="" className='border p-3 rounded-1 position-fixed' style={{ width: "30%", backgroundColor: "#FBFBF9", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h5 className='w-100 text-center' style={{ lineHeight: "40px" }}>로그인</h5>
                <input type="text" placeholder='아이디를 입력해주세요' className='border w-100 mb-2' />
                <input type="password" placeholder='비밀번호를 입력해주세요' className='border w-100' />
                <button className='w-100 mt-4'>확인</button>
            </form>
        </>
    )
}

export default Login_p
