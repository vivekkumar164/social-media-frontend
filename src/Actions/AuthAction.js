import * as AuthApi from '../api/AuthRequest'

export const Login = (formData) => async (dispatch) =>{
    dispatch({type: "AUTH_START"})
    try {
        const {data} = await  AuthApi.login(formData)
        dispatch({type: "AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error);
        dispatch({type: "AUTH_FAIL"})
    }
    
}
export const Signup = (formData) => async (dispatch) =>{
    dispatch({type: "AUTH_START"})
    try {
        const data = await  AuthApi.signup(formData)
        console.log('data',data);
        dispatch({type: "AUTH_SUCCESS",data:data})
    } catch (error) {
        console.log(error);
        dispatch({type: "AUTH_FAIL"})
    }
    
}

export const logout = () => async (dispatch) =>{
    dispatch({type:'LOG_OUT'})
}