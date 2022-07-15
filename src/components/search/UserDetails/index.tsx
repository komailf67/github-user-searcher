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
import Header from '../../common/Header';
import InfoBoxe from './partials/InfoBox';
interface IUserDetailsProps {
  data: TUserDetails;
}
const UserDetails: React.FC<IUserDetailsProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className={styles.list}>
        <InfoBoxe
          icon={<FaDatabase />}
          count={data.public_repos}
          title="Repositories"
        />
        <InfoBoxe
          icon={<FaUserFriends />}
          count={data.followers}
          title="Followers"
        />
        <InfoBoxe
          icon={<FaUserCheck />}
          count={data.following}
          title="Followings"
        />
      </div>
      <Header leftIcon={<FaInfoCircle />} title="User Info" />
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <img src={data.avatar_url} />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h2>Username:</h2>
            </div>
            <div className={styles.infoValue}>
              <h2>{data.login}</h2>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h2>Name:</h2>
            </div>
            <div className={styles.infoValue}>
              <h2>{data.name}</h2>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h2>Email:</h2>
            </div>
            <div className={styles.infoValue}>
              <h2>{data.email}</h2>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.title}>
              <h2>Bio:</h2>
            </div>
            <div className={styles.infoValue}>
              <h2>{data.bio} </h2>
            </div>
          </div>
        </div>
      </div>
      {!!data.public_repos && (
        <>
          <Header leftIcon={<FaDatabase />} title="Repositories" />
          <div className={styles.repositories}>
            {data.repos.map((item, index) => (
              <div key={index} className={styles.repoBox}>
                <div className={styles.item}>
                  <div className={styles.iconWrapper}>
                    <FaTumblr />
                  </div>
                  <h2>{item.name}</h2>
                </div>
                <div className={styles.item}>
                  <div className={styles.iconWrapper}>
                    <FaPencilAlt />
                  </div>
                  <h2>{item.language}</h2>
                </div>
                <div
                  className={styles.item}
                  onClick={() => {
                    window.open(item.html_url, '_blank');
                  }}
                >
                  <div className={styles.iconWrapper}>
                    <FaLink />
                  </div>
                  <h2 className={styles.link}>{item.html_url}</h2>
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
