import Header from 'components/common/Header';
import { FaHistory, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/routes';
import { LocalStorageHandler } from 'utils/localStorage';
import styles from './index.module.scss';

const HistoryPage = () => {
  const storage = new LocalStorageHandler();
  const history = storage.getUsers('history');
  const navigate = useNavigate();
  const handleSearchItem = (username: string) => {
    navigate(`${routes.search}?username=${username}`);
  };
  const handleDeleteHistory = () => {
    storage.clearAll();
    navigate(routes.search);
  };
  return (
    <div>
      <Header
        leftIcon={<FaHistory />}
        rightIcon={
          <div className={styles.search}>
            <FaSearch onClick={() => navigate(routes.search)} />
          </div>
        }
        title={'History'}
      />
      {!!history && (
        <>
          <div className={styles.wrapper}>
            <ul className={styles.lists}>
              {history.map((username, index) => (
                <li key={index} onClick={() => handleSearchItem(username)}>
                  <h2>{username}</h2>
                </li>
              ))}
            </ul>
            <button onClick={handleDeleteHistory}>Delete all</button>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryPage;
