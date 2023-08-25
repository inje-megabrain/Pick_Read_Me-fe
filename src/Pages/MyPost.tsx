import { useEffect, useState } from 'react';
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
      <div className="flex flex-col my-[120px] mx-[40px] border border-gray-100 p-[20px] rounded-[20px] shadow-md w-full h-fit">
        <div className="flex flex-row justify-between mb-[20px]">
          <p></p>
          <p>총 {myPost?.length}개</p>
        </div>
        <div className="flex justify-between grid-cols-4 text-center mb-[15px] text-xl">
          <p className="w-1/4">Title</p>
          <p className="w-1/4">Repository</p>
          <p className="w-1/4">Date</p>
          <p className="w-1/4">Edit / Delete</p>
        </div>
        <div className="flex flex-col justify-between gap-y-[15px]">
          {myPost?.map((item) => {
            return (
              <>
                <MyPostBox
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  create_time={item.create_time}
                  repo={item.repo}
                  owner={item.owner}
                  content={item.content}
                  post_like={item.post_like}
                ></MyPostBox>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyPost;
