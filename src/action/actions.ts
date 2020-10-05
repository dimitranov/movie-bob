import { BaseAction } from './../types/actionTypes';
import { BaseCredentials } from '../types/authTypes';
import AuthService from '../auth/AuthService';
import { FB_auth } from '../firebase/config';

export const COUNT_CHANGE = 'COUNT_CHANGE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_ERROR_CLEAR = 'AUTH_ERROR_CLEAR';



export const changeCount = (payload: number): BaseAction => ({
    type: COUNT_CHANGE,
    payload
});

export const loggin = (): BaseAction => ({
    type: LOGIN
})

export const logout = (): BaseAction => ({
    type: LOGOUT
})

export const onSearchValueChange = (value: string): BaseAction => ({
    type: CHANGE_SEARCH_VALUE,
    payload: value
})

export const onSearchTypeChange = (type: string): BaseAction => ({
    type: CHANGE_SEARCH_TYPE,
    payload: type
})

export function onLoginRequest(loginData: BaseCredentials): (dispatch: Function) => any {
    return (dispatch: Function): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            AuthService.Login(loginData)
                .then((data) => {
                    dispatch({
                        type: LOGIN,
                        payload: data
                    });
                    resolve(data);
                }).catch((error) => {
                    console.log(error);
                    dispatch({
                        type: AUTH_ERROR,
                        payload: error
                    });
                    reject(error);
                });
        })
    }
}

export function onRegistrationRequest(registrationData: BaseCredentials): (dispatch: Function) => Promise<unknown> {
    return (dispatch: Function): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            AuthService.Registrate(registrationData)
                .then((data) => {
                    dispatch({
                        type: LOGIN,
                        payload: data
                    });
                    resolve(data);
                }).catch((error) => {
                    console.log(error);
                    dispatch({
                        type: AUTH_ERROR,
                        payload: error
                    });
                    reject(error);
                });
        })
    }
}

export function onLogoutRequest(): (dispatch: Function) => any {
    return (dispatch: Function): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            AuthService.Logout()
                .then((data) => {
                    dispatch({
                        type: LOGOUT,
                        payload: data
                    });
                    resolve(data);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
        })
    }
}

export const clearAuthError = (): BaseAction => ({
    type: AUTH_ERROR_CLEAR,
    payload: false
});
