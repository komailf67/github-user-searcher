import { ReactElement } from 'react';
import styles from './header.module.scss';

interface IHeaderProps {
  leftIcon: ReactElement;
  rightIcon?: ReactElement;
  title: string;
}
const Header: React.FC<IHeaderProps> = (props) => {
  const { leftIcon, rightIcon, title } = props;
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {leftIcon}
        <h2>{title}</h2>
      </div>
      {rightIcon}
    </div>
  );
};

export default Header;
