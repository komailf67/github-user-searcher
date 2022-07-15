import { useSearchUser } from 'hooks/useSearchUser';
import SearchInput from 'components/search/SearchInput';
import UserDetails from 'components/search/UserDetails';
import styles from './index.module.scss';
import Spinner from 'components/common/Spinner';
import Error from 'components/common/Error';

const SearchPage = () => {
  const { userDetails, fetcher, isFetching, error } = useSearchUser();
  return (
    <>
      <SearchInput fetchUser={fetcher} />
      {isFetching && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {!!error && (
        <Error>
          <h2>{error}</h2>
        </Error>
      )}
      {!!userDetails && <UserDetails data={userDetails} />}
    </>
  );
};

export default SearchPage;
