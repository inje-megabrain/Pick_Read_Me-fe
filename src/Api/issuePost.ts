import client from './client';
import { getCookie } from './Cookies';

type Post = {
  content: string;
  repo: string;
  title: string;
};

export default function issuePost({ content, repo, title }: Post) {
  return new Promise((resolve) => {
    client
      .post(
        `/api/posts`,
        { content, repo, title },
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
        console.log('issuePost 에러 ' + error);
      });
  });
}
