import { useEffect, useState } from 'react';
import { useFetchMyPost } from '../Query/post';
import fetchMyPost from '../Api/fetchMyPost';
import { IPost } from '../Types/posts';
import MyPostBox from '../Components/MyPage/MyPostBox';

const MyPost = () => {
  const [myPost, setMyPost] = useState<IPost[]>();

  useEffect(() => {
    fetchMyPost().then((v) => setMyPost(v as IPost[]));
  }, []);

  return (
    <>
      <div className="flex flex-col mt-[120px] mx-[40px] border border-gray-100 p-[20px] rounded-[20px] shadow-md w-full h-fit">
        <div className="flex flex-row justify-between mb-[20px]">
          <p></p>
          <p>총 {myPost?.length}개</p>
        </div>
        <div className="flex justify-between grid-cols-3 text-center mb-[15px] text-xl">
          <p className="w-1/3">Title</p>
          <p className="w-1/3">Repository</p>
          <p className="w-1/3">Date</p>
        </div>
        <div className="flex flex-col justify-between gap-y-[15px]">
          {myPost?.map((item) => {
            return (
              <MyPostBox
                key={item.id}
                title={item.title}
                create_time={item.create_time}
                repo={item.repo}
              ></MyPostBox>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyPost;
