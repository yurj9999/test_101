import { Result } from "antd";
import styles from './ErrorPage.module.css';

export const ErrorPage: React.FC = () => (
    <div className={styles.error}>
        <Result status="404" title="404" />
    </div>
);
