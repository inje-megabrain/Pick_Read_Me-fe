import { useQuery } from 'react-query';
import fetchUsers from '../Api/fetchUser';
import { useRecoilState } from 'recoil';
import authAtom from '../Atoms/auth';

export const useFetchUser = () => {
  const setAuth = useRecoilState(authAtom);
  return useQuery(['userInfo'], () => fetchUsers(), {
    onSuccess: () => {
      setAuth;
      console.log('useFetchUser 성공');
    },
    onError: () => {
      console.log('useFetchUser 실패');
    },
  });
};
