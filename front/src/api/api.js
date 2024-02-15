
import axios from 'axios';


export const productApi = async (myName, data = null) => {
    try {
        if (data) {
            const response = await axios.post(`/data/${myName}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data
            });
            console.log("여기는 노드 응답 성공 / 리액트 api함수 ", response);
            return response;
        } else {
            return axios.get(`/data/${myName}`);
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};












export const loginApi = async (myName, data) => {
    try {

        const response = await axios.post(`/data/${myName}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData;



    } catch (error) {
        console.log(error);
        return error;
    }
};







