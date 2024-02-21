import { Typography } from 'antd';
import styles from './CardDescription.module.css';

interface IDescriptionData {
    author: string;
    createdAt: string;
    text: string;
    views: string;
}

interface IProps {
    data: IDescriptionData;
}

export const CardDescription: React.FC<IProps> = ({ data: { author, text, createdAt, views } }) => (
    <>
        <Typography>Автор: {author}</Typography>
        <Typography>Дата публикации: {new Date(createdAt).toDateString()}</Typography>
        
        <div className={styles.textDescription}>{text}</div>

        <Typography>Просмотров: {views}</Typography>      
    </>
);
