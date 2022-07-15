import { useSearchUser } from 'hooks/useSearchUser';
import SearchInput from 'components/search/SearchInput';
import UserDetails from 'components/search/UserDetails';
import styles from './index.module.scss';
import Spinner from 'components/common/Spinner';

const SearchPage = () => {
  const { userDetails, fetcher, isFetching } = useSearchUser();
  return (
    <>
      <SearchInput fetchUser={fetcher} />
      {isFetching && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {!!userDetails && <UserDetails data={userDetails} />}
    </>
  );
};

export default SearchPage;
