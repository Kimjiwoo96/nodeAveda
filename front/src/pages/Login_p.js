import { useState, useCallback, useEffect } from "react";
import { useDispatch } from 'react-redux';



function Login_p() {


    const [u_id, setU_id] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();



    const onUidHandler = (event) => {
        setU_id(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }



    const onSubmitHandler = (event) => {

        event.preventDefault();

        console.log('u_id>>>>>>>', u_id);
        console.log('Password>>>>>>>', Password);

        // let body = {
        //     u_id: u_id,
        //     password: Password,
        // }

        // dispatch(loginUser(body));
    }


    return (
        <>
            <form action=""
                lassName='border p-3 rounded-1 position-fixed'
                style={{ width: "30%", backgroundColor: "#FBFBF9", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                onSubmit={onSubmitHandler}
            >
                <h5 className='w-100 text-center' style={{ lineHeight: "40px" }}>로그인</h5>
                <input
                    type="text"
                    placeholder='아이디를 입력해주세요'
                    className='border w-100 mb-2'
                    onChange={onUidHandler}
                    value={u_id}
                />
                <input
                    type="password"
                    placeholder='비밀번호를 입력해주세요'
                    className='border w-100'
                    onChange={onPasswordHandler}
                    value={Password}
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
