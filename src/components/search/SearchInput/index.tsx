import React, { useState } from 'react';

interface ISearchInputProps {
  fetchUser: (userName: string) => Promise<void>;
}
const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const { fetchUser } = props;
  const [userName, setUserName] = useState('');

  const handleSearchUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchUser(userName);
  };
  return (
    <form onSubmit={handleSearchUser}>
      <div>
        <div>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <button>Search User</button>
    </form>
  );
};

export default SearchInput;
