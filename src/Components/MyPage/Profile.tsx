import { useFetchUser } from '../../Query/user';

const Profile = () => {
  const { data } = useFetchUser();
  return (
    <div className="w-full mt-14 ml-60 mb-10 flex justify-center">
      <div className="w-96 p-7 border-2 rounded-2xl border-primary mr-10">
        <div className="mb-5 text-2xl">이름 : {data?.name + '우왕'}</div>
        <div className="mb-5 text-lg">email : {data?.email + '와앙'}</div>
        <div className="text-lg">github : {data?.repo + '오잉'}</div>
        {/* <div>사진 : {data?.profile + '우옹'}</div> */}
      </div>
      <div className="p-7 border-2 border-primary rounded-2xl w-40 h-40 ml-10">
        Profile 사진 : {data?.profile + '우옹'}
      </div>
    </div>
  );
};

export default Profile;
