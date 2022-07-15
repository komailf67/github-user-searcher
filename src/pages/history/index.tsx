import Header from 'components/common/Header';
import { FaHistory, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LocalStorageHandler } from 'utils/localStorage';
import styles from './index.module.scss';

const HistoryPage = () => {
  const storage = new LocalStorageHandler();
  const history = storage.getUsers('history');
  const navigate = useNavigate();
  const handleSearchItem = (username: string) => {
    navigate(`/search?username=${username}`);
  };
  return (
    <div>
      <Header
        leftIcon={<FaHistory />}
        rightIcon={
          <div className={styles.search}>
            <FaSearch onClick={() => navigate('/search')} />
          </div>
        }
        title={'History'}
      />
      <div className={styles.wrapper}>
        <ul className={styles.lists}>
          {!!history &&
            history.map((username, index) => (
              <li key={index} onClick={() => handleSearchItem(username)}>
                {username}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;
