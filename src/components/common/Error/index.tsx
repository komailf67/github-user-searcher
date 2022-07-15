import { FC, ReactNode } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './index.module.scss';

interface IErrorProps {
  children: ReactNode;
}

const Error: FC<IErrorProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.wrapper}>
      <FaExclamationTriangle />
      {children}
    </div>
  );
};

export default Error;
