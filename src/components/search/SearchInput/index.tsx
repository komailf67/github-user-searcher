import React, { useState } from 'react';
import styles from './index.module.scss';
import { FaSearch } from 'react-icons/fa';

interface ISearchInputProps {
  fetchUser: (userName: string) => Promise<void>;
}
const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const { fetchUser } = props;
  const [userName, setUserName] = useState('');

  const handleSearchUser = async (
    event: React.MouseEvent<SVGAElement, MouseEvent> &
      React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' || event.type === 'click') {
      await fetchUser(userName);
    }
  };
  return (
    <div className={styles.form}>
      <div>
        <input
          onKeyUp={handleSearchUser}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <FaSearch onClick={handleSearchUser} />
      </div>
    </div>
  );
};

export default SearchInput;
