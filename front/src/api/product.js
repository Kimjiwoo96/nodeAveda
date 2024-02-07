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

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json(); // Assuming the response is JSON, adjust as necessary
            return responseData;
        } else {
            return axios.get(`/data/${myName}`);
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};


