import { useState } from 'react';
import {
  IFaildSearchUserResDTO,
  IRepoItem,
  ISucceedSearchUserResDTO,
  TUserDetails,
} from 'types/DTO/searchUser';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const useSearchUser = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<TUserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetcher = async (userName: string) => {
    setIsFetching(true);
    await fetch(`${baseUrl}users/${userName}`)
      .then((response) => {
        response
          .json()
          .then((data: ISucceedSearchUserResDTO & IFaildSearchUserResDTO) => {
            if (!response.ok) {
              throw new Error(data.message);
            } else {
              setError(null);
              fetchUserRepos(userName, data);
            }
            setIsFetching(false);
          })
          .catch((err) => {
            setError(`${err.message}: error in fetching user info`);
            setIsFetching(false);
            setUserDetails(null);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsFetching(false);
        setUserDetails(null);
      });
  };
  const fetchUserRepos = async (
    userName: string,
    userInfo: ISucceedSearchUserResDTO
  ) => {
    setIsFetching(true);
    return await fetch(`${baseUrl}users/${userName}/repos`)
      .then((response) => {
        response
          .json()
          .then((data: IRepoItem[] & IFaildSearchUserResDTO) => {
            setIsFetching(false);
            if (!response.ok) {
              throw new Error(data.message);
            } else {
              setUserDetails({ ...userInfo, repos: data });
              setError(null);
              return data;
            }
          })
          .catch((err) => {
            setError(`${err.message} error in fetching repositories`);
            setIsFetching(false);
            setUserDetails(null);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsFetching(false);
        setUserDetails(null);
      });
  };

  return { isFetching, fetcher, userDetails, error };
};
