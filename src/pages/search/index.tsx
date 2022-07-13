import { useSearchUser } from 'hooks/useSearchUser';
import SearchInput from 'components/search/SearchInput';
import UserDetails from 'components/search/UserDetails';

const SearchPage = () => {
  const { userDetails, fetcher } = useSearchUser();
  return (
    <>
      <SearchInput fetchUser={fetcher} />
      {!!userDetails && <UserDetails data={userDetails} />}
    </>
  );
};

export default SearchPage;
