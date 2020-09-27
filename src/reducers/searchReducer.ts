import { CHANGE_SEARCH_VALUE, CHANGE_SEARCH_TYPE } from './../action/actions';
import { BaseAction } from "../types/actionTypes"

type SearchReducerState = {
    value: string,
    type: string
}

const initialState = {
    value: '',
    type: 'movie'
}

export const searchReducer = (state: SearchReducerState = initialState, action: BaseAction) => {
    switch (action.type) {
        case CHANGE_SEARCH_VALUE:
            return { ...state, value: action.payload }
        case CHANGE_SEARCH_TYPE:
            return { ...state, type: action.payload }
        default:
            return state;
    }
}
