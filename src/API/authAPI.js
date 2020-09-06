const { authAxios } = require('./api');

export const login = async ({ email, password, history }) => {
  try {
    const { data } = await authAxios.post('auth/login', { email, password });
    console.log(data);
    if (data.success === true) {
      const token = data.data.token;
      sessionStorage.setItem('json_token', token);
      history.replace('/home');
    } else {
      alert('Authentication Failure');
    }
  } catch (error) {
    console.log(error.message);
  }
};
