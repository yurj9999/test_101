import { combineReducers } from 'redux';
import { allNews, currentNews, comments } from './reducers';

export const rootReducer = combineReducers({
    allNews,
    currentNews,
    comments,
});
