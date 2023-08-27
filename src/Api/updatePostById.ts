import { getCookie } from './Cookies';
import client from './client';
export interface UpdatePostParam {
  postId: number;
  title: string;
  content: string;
  repo: string;
}

export default function updatePostById({
  postId,
  title,
  content,
  repo,
}: UpdatePostParam) {
  return new Promise((resolve) => {
    client
      .put(
        `/api/put/posts?post_id=${postId}`,
        { title, content, repo },
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
            refreshToken: getCookie('refreshToken'),
          },
        }
      )
      .then((v) => {
        resolve(v);
      })
      .catch((error) => {
        console.log('updatePostById 에러 ', error);
      });
  });
}
