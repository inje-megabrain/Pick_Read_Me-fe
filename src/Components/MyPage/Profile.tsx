import { useEffect } from 'react';
import { useFetchUser } from '../../Query/user';
import { useRecoilState } from 'recoil';
import authAtom from '../../Atoms/auth';
import fetchUsers from '../../Api/fetchUser';

const Profile = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  useEffect(() => {
    fetchUsers().then(setAuth);
  }, []);

  //const { data } = useFetchUser();
  //console.log(data);
  return (
    <div className="w-full mt-14 ml-60 mb-10 flex justify-center">
      <div className="w-96 p-7 border-2 rounded-2xl border-primary mr-10">
        <div className="mb-5 text-2xl">이름 : {auth?.name + '우왕'}</div>
        <div className="mb-5 text-lg">
          email :{' '}
          {auth?.email === 'null'
            ? 'github에서 email을 public으로 설정해주세요!'
            : auth?.email + ' 와앙'}
        </div>
        <div className="text-lg">github : {auth?.repo + '오잉'}</div>
        {/* <div>사진 : {data?.profile + '우옹'}</div> */}
      </div>
      <div className="p-7 border-2 border-primary rounded-2xl w-40 h-40 ml-10">
        <img src={auth?.profile} alt="Profile Image"></img>
      </div>
    </div>
  );
};

export default Profile;
