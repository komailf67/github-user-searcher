import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { FaHistory, FaSearch } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from 'routes/routes';

interface ISearchInputProps {
  fetchUser: (userName: string) => Promise<void>;
}
const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const { fetchUser } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentUser = searchParams.get('username');
  const [userName, setUserName] = useState(currentUser ?? '');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      fetchUser(userName);
    }
  }, []);

  const handleSearchUser = (
    event: React.MouseEvent<SVGAElement, MouseEvent> &
      React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' || event.type === 'click') {
      searchParams.set('username', userName);
      setSearchParams(searchParams);
      fetchUser(userName);
    }
  };
  const handleHistory = () => {
    navigate(routes.history);
  };
  return (
    <div className={styles.form}>
      <div>
        <input
          onKeyUp={handleSearchUser}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter a username"
        />
        <div className={styles.searchIcon}>
          <FaSearch onClick={handleSearchUser} />
        </div>
        <div className={styles.historyIcon}>
          <FaHistory onClick={handleHistory} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
