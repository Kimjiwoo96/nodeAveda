import axios from 'axios';


export const productApi = async (myName) => {
    try {
        return axios.post(`http://jiwoo96.cafe24app.com/data/${myName}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            parms: ""
        });
    } catch (error) {
        console.log(error);
        return error;
    }
};
