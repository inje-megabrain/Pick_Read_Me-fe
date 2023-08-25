import client from './client';

const deletePost = async (postId: number) => {
  try {
    const res = await client.delete(`/api/delete/posts?post_id=${postId}`, {});
    if (res) console.log('삭제 완료');
  } catch (error) {
    console.log('deletePost 에러 ', error);
  }
};

export default deletePost;
