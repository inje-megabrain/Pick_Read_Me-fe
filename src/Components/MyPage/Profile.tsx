import { useEffect } from 'react';
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
    <div className="min-w-0 h-fit pb-32 bg-slate-200 w-96 shadow-xl rounded-lg mt-36 mx-10 flex justify-center">
      <div className="shadow-xl rounded-full align-middle border-none absolute max-w-150-px -mt-16">
        <img
          className="rounded-full w-36 h-36"
          src={auth?.repo}
          alt="Profile Image"
        ></img>
      </div>
      <div className="text-center mt-28 w-full">
        <h3 className="text-3xl font-semibold leading-normal mb-2">
          {auth?.name}
        </h3>
        {auth?.email !== 'null' ? (
          <h4 className="text-zinc-500 text-lg">{auth?.email}</h4>
        ) : (
          <></>
        )}

        <div className="stats stats-vertical lg:stats-horizontal shadow bg-white mt-10">
          <div className="stat">
            <div className="stat-title">Repository</div>
            <div className="stat-value">31</div>
            <div className="stat-desc">stat-desc</div>
          </div>
          <div className="stat">
            <div className="stat-title">ReadMe</div>
            <div className="stat-value">1</div>
            <div className="stat-desc">stat-desc</div>
          </div>
        </div>
        <div className="divider px-10"></div>

        <div className="flex justify-center">
          <a href={auth?.profile} target="_blank" className="block">
            <VscGithub className="w-8 h-8 mr-3" />
          </a>
        </div>
      </div>
    </div>

    // <div className="mt-14 mb-10 flex justify-center items-center w-full">
    //   <div className="p-5 border-2 rounded-2xl mr-10 bg-slate-400 w-96 h-52 flex flex-col justify-center">
    //     <div className="mb-5 text-2xl">{auth?.name}</div>
    //     <div className="mb-5 text-lg">
    //       {auth?.email === 'null'
    //         ? 'github에서 email을 public으로 설정해주세요! '
    //         : auth?.email}
    //     </div>
    //     <div className="text-lg flex justify-center">
    //       <a href={auth?.profile} target="_blank">
    //         <VscGithub className="w-8 h-8 float-left mr-3" />
    //         Github 바로가기
    //       </a>
    //     </div>
    //   </div>
    //   <div className="p-7 border-2 border-primary rounded-2xl w-48 h-46 ml-10">
    //     <img src={auth?.repo} alt="Profile Image"></img>
    //   </div>
    // </div>
  );
};

export default Profile;
