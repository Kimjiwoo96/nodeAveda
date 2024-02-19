import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// api
import { productApi } from "../api/api.ts";

function Login_p({
    mbstatus,
    setMbstatus
}) {
    const [formData, setFormData] = useState({});
    // const [mbstatus, setMbstatus] = useState("nomember");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log("리엑트 formData>>>>>", formData);
            const response = await productApi('member', formData);
            setFormData({
                name: "",
                password: ""
            });
            console.log("로그인 컴포넌트", response); // Check response structure
            setMbstatus(response.data.member); // Assuming response.data.member contains 's', 'm', or 'nomember'


            console.log("멤버야아니야>>>>>>", mbstatus)
        } catch (error) {
            console.error('서버 요청 오류:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log(mbstatus);
    }, [mbstatus]);

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
                </form>
            }
            {mbstatus === "최고관리자" && <p><Link to="/registration">최고관리자님 환영합니다. 상품등록 바로가기</Link></p>}
            {mbstatus === "회원" && <p><Link to="/">일반회원</Link></p>}
        </>
    );
}

export default Login_p;