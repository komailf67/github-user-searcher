import { FC } from 'react';
import { ReactElement } from 'react';
import styles from './InfoBox.module.scss';
interface IInfoBoxProps {
  icon: ReactElement;
  title: string;
  count: number;
}
const InfoBoxe: FC<IInfoBoxProps> = (props) => {
  const { icon, title, count } = props;
  return (
    <div className={styles.box}>
      {icon}
      <div>
        <h2>{count}</h2>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default InfoBoxe;
