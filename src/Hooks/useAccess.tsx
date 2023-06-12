import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import fetchUsers from '../Api/fetchUser';
import authAtom from '../Atoms/auth';

export const useAccess = () => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
      console.log('로그인 해주세요');
    } else {
      console.log('로그인 됐엉');
    }
  }, []);
};
