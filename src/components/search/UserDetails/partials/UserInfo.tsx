import styles from './UserInfo.module.scss';
import { FC } from 'react';

interface IUserInfoProps {
  avatar_url: string;
  username: string;
  name: string | null;
  email: string | null;
  bio: string | null;
}
const UserInfo: FC<IUserInfoProps> = (props) => {
  const { avatar_url, username, name, email, bio } = props;
  return (
    <div className={styles.info}>
      <div className={styles.imageWrapper}>
        <img src={avatar_url} alt={username} />
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.infoList}>
          <div className={styles.title}>
            <h2>Username:</h2>
          </div>
          <div className={styles.infoValue}>
            <h2>{username}</h2>
          </div>
        </div>
        <div className={styles.infoList}>
          <div className={styles.title}>
            <h2>Name:</h2>
          </div>
          <div className={styles.infoValue}>
            <h2>{name}</h2>
          </div>
        </div>
        <div className={styles.infoList}>
          <div className={styles.title}>
            <h2>Email:</h2>
          </div>
          <div className={styles.infoValue}>
            <h2>{email}</h2>
          </div>
        </div>
        <div className={styles.infoList}>
          <div className={styles.title}>
            <h2>Bio:</h2>
          </div>
          <div className={styles.infoValue}>
            <h2>{bio} </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
