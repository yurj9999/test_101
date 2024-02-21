import { shallowEqual, useDispatch } from 'react-redux';
import styles from './News.module.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useDataSelector } from '../../services/hooks';
import { ALL_NEWS_ENDPOINT } from '../../consts';
import { setCommentsAction, setCurrentNewsAction } from '../../services/actions';
import { ERoutes } from '../../types';
import Title from 'antd/es/typography/Title';
import { Avatar, List, Spin, Typography } from 'antd';
import { Spinner } from '../Spinner';

export const News: React.FC = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { allNews, currentNews, comments } = useDataSelector(({ allNews, currentNews, comments }) => ({
        allNews,
        currentNews,
        comments,
    }), shallowEqual);

    const currentNewsFromAllNews = useMemo(() => allNews.find(({ id: newsId }) => newsId === id), [allNews, id]);

    useEffect(() => {
        if (!Object.keys(currentNews).length) {
            if (currentNewsFromAllNews) {
                dispatch(setCurrentNewsAction(currentNewsFromAllNews));
            } else {
                const getCurrentNews = async () => {
                    const data = await fetch(`${ALL_NEWS_ENDPOINT}/${id}`);
                    
                    if (data.ok) {
                        const currentNews = await data.json();
                        dispatch(setCurrentNewsAction(currentNews));
                    }
                };
    
                getCurrentNews();
            }
        }
    }, [currentNews, currentNewsFromAllNews, id, dispatch]);

    useEffect(() => {
        if (!comments.length || comments[0].newsId !== id) {
            const getComments = async () => {
                    const data = await fetch(`${ALL_NEWS_ENDPOINT}/${id}/comments`);

                    if (data.ok) {
                        const comments = await data.json();
                        dispatch(setCommentsAction(comments));
                    }
            };

            getComments();
        }
    }, [comments, id, dispatch, comments.length, currentNews.id]);

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Title level={3}>{currentNews.name ?? <Spin size="small" />}</Title>
            </header>
            <main className={styles.main}>
                <Link to={ERoutes.Main}>Вернуться к списку новостей</Link>

                {!Object.keys(currentNews).length ? (
                    <Spinner />
                ) : (
                    <div className={styles.news}>
                        <Typography>Автор: {currentNews.author}</Typography>
                        <Typography>Дата публикации: {new Date(currentNews.createdAt).toDateString()}</Typography>
                        <Typography>Просмотры: {currentNews.views}</Typography>

                        <img alt="pic" className={styles.img} src={currentNews.image} />

                        <p>{currentNews.text}</p>

                        <div className={styles.comments}>
                            <Typography className={styles.commentsTitle}>Комментарии:</Typography>

                            {!comments?.length || comments[0].newsId !== id
                                ? <Title level={5}>Пока нет комментариев</Title>
                                : (
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={comments}
                                        renderItem={({ avatar, author, createdAt, text }) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar src={avatar} />}
                                                    title={author}
                                                    description={
                                                        <div>
                                                            <Typography>Дата публикации: {new Date(createdAt).toDateString()}</Typography>
                                                            {text}
                                                        </div>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                )}
                        </div>
                    </div>
                )}
            </main>            
        </div>
    );
};