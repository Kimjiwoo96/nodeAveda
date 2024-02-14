
import axios from 'axios';


export const productApi = async (myName, data = null) => {
    try {
        if (data) {

            axios.post(`/data/${myName}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data
            }).then((response) => {
                console.log(response);
                response.json().then((responseData) => {
                    return responseData;
                });

            }).catch((err) => {
                console.log("받아오지못함")
            });

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






// export const loginApi = async (myName, data = null) => {
//     try {
//         if (data) {

//             const response = await axios.post(`/data/${myName}`, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 body: data
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const responseData = await response.json();
//             return responseData;
//         } else {
//             return axios.get(`/data/${myName}`);
//         }

//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// };



