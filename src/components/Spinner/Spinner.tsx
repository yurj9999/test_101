import { Spin } from 'antd';
import styles from './Spinner.module.css';

export const Spinner: React.FC = () => (
    <div className={styles.spinner}>
        <Spin size="large" />
    </div>
);
