import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL

const authAxios = axios.create({
    baseURL: apiURL,
})

const commonAxios = axios.create({
    baseURL: apiURL,
})

commonAxios.interceptors.request.use(req => {
    const token = sessionStorage.getItem('json_token');
    if (token) {
        req.headers['Authorization'] = token;
    }
    return req;
})

commonAxios.interceptors.response.use(
    res => res,
    err => {
        if ([401, 403, 404].includes(err.response.status)) {
            sessionStorage.removeItem('json_token');
        }
        return Promise.reject(err);
    }
)

export { commonAxios as axios, authAxios };
