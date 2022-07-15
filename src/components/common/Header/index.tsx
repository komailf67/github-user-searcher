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
        <h4>{title}</h4>
      </div>
      {rightIcon}
    </div>
  );
};

export default Header;
