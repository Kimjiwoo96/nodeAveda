import axios, { AxiosResponse } from 'axios';

import { Productts } from '../ts/common'


export const productApi = async (myName: string, data: FormData | null = null): Promise<AxiosResponse<Productts> | Error> => {
    try {
        if (data) {
            const response = await axios.post < Productts > (`/data/${myName}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log("여기는 노드 응답 성공 / 리액트 api함수 ", response);
            return response;
        } else {
            const response = await axios.get < Productts > (`/data/${myName}`);
            return response;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};






















