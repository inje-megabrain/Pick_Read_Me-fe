import { useQuery } from 'react-query';
import fetchUsers from '../Api/fetchUser';

export const useFetchUser = () => {
  return useQuery(['userInfo'], () => fetchUsers(), {
    onSuccess: () => {
      console.log('useFetchUser 성공');
    },
    onError: () => {
      console.log('useFetchUser 실패');
    },
  });
};
