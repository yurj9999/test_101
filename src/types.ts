import { SET_ALL_NEWS_TO_STORE, SET_COMMENTS, SET_CURRENT_NEWS_TO_STORE } from "./services/actions";

export enum ERoutes {
    Main = '/',
    CurrentNews = '/news'
}

export interface INews {
    author: string;
    createdAt: string;
    id: string;
    image: string;
    name: string;
    text: string;
    views: string;
}

type TExcludedFields = 'image' | 'name' | 'views';

export interface IComment extends Omit<INews, TExcludedFields> {
    newsId: string;
    avatar: string;
}

export interface ISetNewsAction {
    readonly type: typeof SET_ALL_NEWS_TO_STORE;
    news: INews[];
}

export interface ISetCurrentNewsAction {
    readonly type: typeof SET_CURRENT_NEWS_TO_STORE;
    currentNews: INews;
}

export interface ISetCommentsAction {
    readonly type: typeof SET_COMMENTS;
    comments: IComment[];
}

export type TRootState = {
    allNews: INews[],
    currentNews: INews,
    comments: IComment[],
};
