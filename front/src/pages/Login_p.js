import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom"
// api
import { productApi } from "../api/api";




function Login_p() {

    const [formData, setFormData] = useState({});
    const [mbstatus, setMbstatus] = useState("nomember");








    const onSubmitHandler = async (e) => { //전송버튼 비동기 이벤트
        console.log("전송요청함")

        try {
            e.preventDefault();
            // 리액트에서 일단 먼저확인 보내기 전
            console.log("리엑트 formData>>>>>", formData);
            //
            productApi('member', formData).then((response) => {
                console.log("나는 누구인가>>>>>", mbstatus)
                console.log("결과는???????", response)
            });
            // 노드에서 보내줌





            // setMbstatus(response.data) //s 면 최고관리자, m 이면 일반회원, nomember
            setFormData({
                name: "",
                password: ""
            })
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





    useEffect(() => {
        console.log(">>??>?>**", mbstatus)
    }, [mbstatus])

    useEffect(() => {
        console.log(">>??>?>**", mbstatus)
    }, [mbstatus])



    return (

        <>
            {mbstatus === "nomember" &&
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='비밀번호를 입력해주세요'
                        className='border w-100'
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <button
                        type="submit"
                        className='w-100 mt-4'

                    >로그인</button>
                </form >
            }
            {
                mbstatus === "s" && <p><Link to="/registration">최고관리자님 환영합니다. 상품등록 바로가기</Link></p>
            }
            {
                mbstatus === "m" && <p><Link to="/">일반회원</Link></p>
            }
        </>
    )
}

export default Login_p