import { useState } from 'react';
import { ISucceedSearchUserResDTO } from '../types/DTO/searchUser';

export const useSearchUser = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [userDetails, setUserDetails] =
    useState<ISucceedSearchUserResDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetcher = async (userName: string) => {
    setIsFetching(true);
    return await fetch(`https://api.github.com/users/${userName}`).then(
      (response) => {
        response
          .json()
          .then((data) => {
            if (!response.ok) {
              setUserDetails(null);
              setError(data.message);
            } else {
              setError(null);
              setUserDetails(data);
            }
            setIsFetching(false);
          })
          .catch((err) => {
            setIsFetching(false);
            setUserDetails(null);
            setError('something went wrong');
          });
      }
    );
  };
  return { isFetching, fetcher, userDetails, error };
};
