import { createStore } from 'redux'
import { userReducer } from '../reducers/userReducer'
import { searchReducer } from '../reducers/searchReducer'
import { combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    userReducer,
    searchReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export type RootState = ReturnType<typeof rootReducer>
