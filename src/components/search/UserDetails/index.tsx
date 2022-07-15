import React from 'react';
import { TUserDetails } from 'types/DTO/searchUser';
import styles from './index.module.scss';
import {
  FaDatabase,
  FaUserCheck,
  FaUserFriends,
  FaInfoCircle,
} from 'react-icons/fa';
import Header from '../../common/Header';
import InfoBoxe from './partials/InfoBox';
import Repositories from './partials/Repositories';
import UserInfo from './partials/UserInfo';
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
      <UserInfo
        avatar_url={data.avatar_url}
        username={data.login}
        name={data.name}
        email={data.email}
        bio={data.bio}
      />
      {!!data.public_repos && <Repositories data={data} />}
    </>
  );
};

export default UserDetails;
