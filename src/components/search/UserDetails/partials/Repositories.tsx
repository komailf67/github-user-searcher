import styles from './Repositories.module.scss';
import Header from 'components/common/Header';
import { FaDatabase, FaLink, FaPencilAlt, FaTumblr } from 'react-icons/fa';
import { FC } from 'react';
import { TUserDetails } from 'types/DTO/searchUser';

interface IRepositoriesProps {
  data: TUserDetails;
}
const Repositories: FC<IRepositoriesProps> = (props) => {
  const { data } = props;
  return (
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
  );
};

export default Repositories;
