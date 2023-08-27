import client from './client';
import { getCookie } from './Cookies';
import { IPost } from '../Types/posts';

const fetchPostById = async (id: number) => {
  try {
    const res = await client.get(`api/get/detail/post?post_id=${id}`, {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: getCookie('refreshToken'),
      },
    });
    if (res.data) {
      console.log(res.data);
    }
    return res.data as IPost;
  } catch (error) {
    console.log('fetchPostById 에러 ', error);
    return {} as IPost;
  }
};

export default fetchPostById;
