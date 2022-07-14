import React from 'react';
import { TUserDetails } from 'types/DTO/searchUser';
import styles from './index.module.scss';
import {
  FaDatabase,
  FaUserCheck,
  FaUserFriends,
  FaTumblr,
  FaPencilAlt,
  FaLink,
  FaInfoCircle,
} from 'react-icons/fa';
interface IUserDetailsProps {
  data: TUserDetails;
}
const UserDetails: React.FC<IUserDetailsProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={styles.list}>
        <div className={styles.box}>
          <FaDatabase />
          <div>
            <h4>{data.public_repos}</h4>
            <h4>Repositories</h4>
          </div>
        </div>
        <div className={styles.box}>
          <FaUserFriends />
          <div>
            <h4>{data.followers}</h4>
            <h4>Followers</h4>
          </div>
        </div>
        <div className={styles.box}>
          <FaUserCheck />
          <div>
            <h4>{data.following}</h4>
            <h4>Followings</h4>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <FaInfoCircle />
        <h4>User Info</h4>
      </div>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <img src={data.avatar_url} />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h3>Username:</h3>
            </div>
            <div className={styles.infoValue}>
              <h3>{data.login}</h3>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h3>Name:</h3>
            </div>
            <div className={styles.infoValue}>
              <h3>{data.name}</h3>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h3>Email:</h3>
            </div>
            <div className={styles.infoValue}>
              <h3>{data.email}</h3>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h3>Bio:</h3>
            </div>
            <div className={styles.infoValue}>
              <h3>{data.bio}</h3>
            </div>
          </div>
        </div>
      </div>
      {!!data.public_repos && (
        <>
          <div className={styles.header}>
            <FaDatabase />
            <h4>Repositories</h4>
          </div>
          <div className={styles.repositories}>
            {data.repos.map((item, index) => (
              <div key={index} className={styles.repoBox}>
                <div className={styles.item}>
                  <FaTumblr />
                  <h4>{item.name}</h4>
                </div>
                <div className={styles.item}>
                  <FaPencilAlt />
                  <h4>{item.language}</h4>
                </div>
                <div
                  className={styles.item}
                  onClick={() => {
                    window.open(item.html_url, '_blank');
                  }}
                >
                  <FaLink />
                  <h4 className={styles.link}>{item.html_url}</h4>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;
