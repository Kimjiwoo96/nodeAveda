import { useState, useCallback, useEffect } from "react";
// api
import { productApi } from "../api/product";




function Login_p() {

    const [formData, setFormData] = useState({
        name: '',
        Password: '',
    });






    const onSubmitHandler = async (e) => { //전송버튼 비동기 이벤트
        console.log("전송요청함")

        try {
            e.preventDefault();
            // 리액트에서 일단 먼저확인 보내기 전
            console.log("리엑트 formData>>>>>", formData);
            //
            const response = await productApi('member', formData);
            // 노드에서 보내줌
            console.log('서버 응답:', response);
        } catch (error) {
            console.error('서버 요청 오류:', error);
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log("나는data>>>", formData)
    };



    return (
        <>
            <form
                className='border p-3 rounded-1 position-fixed'
                style={{ width: "30%", backgroundColor: "#FBFBF9", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                onSubmit={onSubmitHandler}
            >
                <h5 className='w-100 text-center' style={{ lineHeight: "40px" }}>로그인</h5>
                <input
                    type="text"
                    placeholder='아이디를 입력해주세요'
                    className='border w-100 mb-2'
                    name={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder='비밀번호를 입력해주세요'
                    className='border w-100'
                    name={formData.Password}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className='w-100 mt-4'
                    formAction=""
                >로그인</button>
            </form >
        </>
    )
}

export default Login_p
