import SearchInput from '../../components/search/SearchInput';
import UserDetails from '../../components/search/UserDetails';
import { useSearchUser } from '../../hooks/useSearchUser';

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
