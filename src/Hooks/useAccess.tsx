import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authAtom from '../Atoms/auth';
import { useNavigate } from 'react-router-dom';

export const useAccess = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/');
      console.log('로그인 해주세요');
    } else {
      setAuth(token);
      console.log('로그인 됐엉');
    }
  }, []);
};
