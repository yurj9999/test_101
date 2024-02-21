import { IComment, INews } from "../../types";

export const SET_ALL_NEWS_TO_STORE: 'SET_ALL_NEWS_TO_STORE' = 'SET_ALL_NEWS_TO_STORE';
export const SET_CURRENT_NEWS_TO_STORE: 'SET_CURRENT_NEWS_TO_STORE' = 'SET_CURRENT_NEWS_TO_STORE';
export const SET_COMMENTS: 'SET_COMMENTS' = 'SET_COMMENTS';

export const setAllNewsAction = (news: INews[]) => ({
    type: SET_ALL_NEWS_TO_STORE,
    news, 
});

export const setCurrentNewsAction = (currentNews: INews) => ({
    type: SET_CURRENT_NEWS_TO_STORE,
    currentNews,
});

export const setCommentsAction = (comments: IComment[]) => ({
    type: SET_COMMENTS,
    comments,
});
