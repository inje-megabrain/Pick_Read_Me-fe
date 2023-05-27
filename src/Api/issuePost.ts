import client from './client';

type Post = {
  content: string;
  repo: string;
  title: string;
};

export default function issuePost({ content, repo, title }: Post) {
  return new Promise((resolve) => {
    client
      .post(`/api/posts`, { content, repo, title })
      .then((v) => {
        resolve(v);
      })
      .catch((error) => {
        console.log('issuePost 에러 ' + error);
      });
  });
}
