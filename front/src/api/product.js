import axios from 'axios';


export const productApi = async (myName) => {
    try {
        return axios.post(`/data/${myName}`, {
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
