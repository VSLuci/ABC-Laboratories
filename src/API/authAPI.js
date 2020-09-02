const { authAxios } = require("./api")

export const login = async ({ email, password, history }) => {
    try {
        const { data } = await authAxios.post('auth/login', { email, password });
        const token = data.data.token;
        const user = data.data.user;
        sessionStorage.setItem('json_token', token);
        history.replace('/abc/home')
    } catch (error) {
        console.log(error.message);
    }
}