import { AUTH_ERROR } from './../action/actions';
import { BaseAction } from "../types/actionTypes";
import { LOGIN, LOGOUT } from "../action/actions";

type UserReducerState = {
    logged: boolean,
    user: any,
    authError: any,
};

const initialState = {
    logged: false,
    user: null,
    authError: null
};

export const userReducer = (state: UserReducerState = initialState, action: BaseAction) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, logged: true, user: action.payload.user };
        case LOGOUT:
            return { ...state, logged: false, user: null };
        case AUTH_ERROR:
            return { ...state, authError: action.payload };
        default:
            return state;
    }
}