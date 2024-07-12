import axios from 'axios'

const requestPassword = async (email: any) => {
    console.log(process.env.REACT_APP_THEME_API_URL);
    const res = await axios.get(process.env.REACT_APP_THEME_API_URL + 'auth/create-url-reset-password', { params: { email: email } });
    return res;
}


const updatedPassword = async (password: any, password_confirm: any, token: any) => {
    const res = await axios.post(process.env.REACT_APP_THEME_API_URL + 'auth/reset-password', { password: password, password_confirm: password_confirm, token: token });
    return res;
}


export { requestPassword, updatedPassword }