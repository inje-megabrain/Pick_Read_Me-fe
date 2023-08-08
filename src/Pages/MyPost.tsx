import { useEffect } from 'react';
import { useFetchMyPost } from '../Query/post';
import fetchMyPost from '../Api/fetchMyPost';

const MyPost = () => {
  useEffect(() => {
    fetchMyPost().then((v) => console.log(v));
  });

  return (
    <>
      <div>MyPost Page</div>
      <br />
    </>
  );
};

export default MyPost;
