import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL
})

const fetcher = (url: string) => axios.get(url).then(res => res.data);











export default fetcher;