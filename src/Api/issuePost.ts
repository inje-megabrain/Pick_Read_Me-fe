import client from './client';
import { getCookie } from './Cookies';

type Post = {
  content: string;
  repo: string;
  title: string;
  file: Blob;
};

export default function issuePost({ content, repo, title, file }: Post) {
  const form = new FormData();

  form.append('content', content);
  form.append('repo', repo);
  form.append('title', title);
  form.append('file', file);

  return new Promise((resolve) => {
    client
      .post(`/api/post/posts`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v);
      })
      .catch((error) => {
        console.log('issuePost 에러 ' + error);
        console.log(file);
      });
  });
}
