import { ISetNewsAction, ISetCurrentNewsAction, INews, IComment, ISetCommentsAction } from "../../types";
import { SET_ALL_NEWS_TO_STORE, SET_COMMENTS, SET_CURRENT_NEWS_TO_STORE } from "../actions";

const NEWS_INITIAL_STATE: INews[] = [];
const CURRENT_NEWS_INITIAL_STATE: Partial<INews> = {};
const COMMENTS: IComment[] = [];

export const allNews = (state = NEWS_INITIAL_STATE, action: ISetNewsAction) => {
    switch (action.type) {
        case SET_ALL_NEWS_TO_STORE:
            return action.news;

    default:
        return state;
    }
}

export const currentNews = (state = CURRENT_NEWS_INITIAL_STATE, action: ISetCurrentNewsAction) => {
    switch (action.type) {
        case SET_CURRENT_NEWS_TO_STORE:
            return action.currentNews;
    default:
        return state;
    }
}

export const comments = (state = COMMENTS, action: ISetCommentsAction) => {
    switch (action.type) {
        case SET_COMMENTS:
            return action.comments;
    default:
        return state;
    }
}
