import axios from 'axios';


export const productApi = async (myName, data = null) => {
    try {
        if (data) {
            return axios.post(`/data/${myName}`, data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
        } else {
            return axios.get(`/data/${myName}`);
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};






// export const productApi = async (myName, data = null) => {
//     try {
//         if (data) {
//             return axios.post(`/data/${myName}`, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 params: data
//             });
//         } else {
//             return axios.get(`/data/${myName}`);
//         }

//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// };

