import { useEffect } from 'react';
import styles from './Main.module.css';
import { shallowEqual, useDispatch } from 'react-redux';
import { setAllNewsAction } from '../../services/actions';
import { useNavigate } from 'react-router-dom';
import { ALL_NEWS_ENDPOINT, QUERY_PARAMS_ALL_NEWS } from '../../consts';
import { useDataSelector } from '../../services/hooks';
import { Typography, Card } from 'antd';
import { Spinner } from '../Spinner';
import { v4 as uuid } from 'uuid';
import { ERoutes } from '../../types';
import { CardDescription } from '../CardDescripton';

const { Title } = Typography;
const { Meta } = Card;

export const Main: React.FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { allNews } = useDataSelector(({ allNews }) => ({
        allNews,
    }), shallowEqual);

    useEffect(() => {
        if (!allNews.length) {
            const getAllNews = async () => {
                const data = await fetch(`${ALL_NEWS_ENDPOINT}/${QUERY_PARAMS_ALL_NEWS}`);

                if (data.ok) {
                    const news = await data.json();
                    dispatch(setAllNewsAction(news));
                }
            };
    
            getAllNews();
        }
    }, [dispatch, allNews.length]);

    

    


    console.log('ALL~~~~~~~~~~~~', allNews);




    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Title level={1}>Новости</Title>
            </header>
            <main className={styles.main}>
                {!allNews.length ? (
                    <Spinner />
                ) : (
                    <div className={styles.cards}>
                        {allNews.map(({ id, image, name, text, author, createdAt, views }) => (
                            <Card
                                className={styles.card}
                                key={uuid()}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="pic" src={image} />}
                                onClick={() => navigate(`${ERoutes.CurrentNews}/${id}`)}
                            >
                                <Meta title={name} description={
                                    <CardDescription data={{
                                        text,
                                        createdAt,
                                        views,
                                        author,
                                    }} />
                                } />
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
