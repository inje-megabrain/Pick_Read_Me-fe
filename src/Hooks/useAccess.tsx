import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import accessAtom from '../Atoms/access';
import { useNavigate } from 'react-router-dom';

export const useAccess = () => {
  const setAccessToken = useSetRecoilState(accessAtom);
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/');
      console.log('로그인 해주세요');
    } else {
      setAccessToken(token);
      console.log('로그인 됐엉');
    }
  }, []);
};
