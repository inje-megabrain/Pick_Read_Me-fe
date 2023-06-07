import { useEffect } from 'react';
import { useFetchUser } from '../../Query/user';
import { useRecoilState } from 'recoil';
import authAtom from '../../Atoms/auth';
import fetchUsers from '../../Api/fetchUser';
import { VscGithub } from 'react-icons/vsc';

const Profile = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  useEffect(() => {
    fetchUsers().then(setAuth);
  }, []);

  return (
    <div className="w-full mt-14 mb-10 flex justify-center items-center">
      <div className="p-7 border-2 rounded-2xl mr-10 bg-slate-400">
        <div className="mb-5 text-2xl">{auth?.name}</div>
        <div className="mb-5 text-lg">
          {auth?.email === 'null'
            ? 'github에서 email을 public으로 설정해주세요! '
            : auth?.email}
        </div>
        <div className="text-lg flex justify-center">
          <a href={auth?.profile} target="_blank">
            <VscGithub className="w-8 h-8 float-left mr-3" />
            Github 바로가기
          </a>
        </div>
      </div>
      <div className="p-7 border-2 border-primary rounded-2xl w-48 h-46 ml-10">
        <img src={auth?.repo} alt="Profile Image"></img>
      </div>
    </div>
  );
};

export default Profile;
