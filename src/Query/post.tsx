import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import issuePost from '../Api/issuePost';
import fetchReadme from '../Api/fetchReadme';
import fetchPost from '../Api/fetchPost';
import { IPost } from '../Types/posts';
import { useSetRecoilState } from 'recoil';
import fetchMyPost from '../Api/fetchMyPost';

// export const useFetchPost = (page: number) => {
//   return useQuery<IPost[], unknown>(['posts'], () => fetchPost(page), {
//     onSuccess: () => {
//       console.log('useFetchPost 성공');
//     },
//     onError: () => {
//       console.log('useFetchPost 실패');
//     },
//   });
// };

export const useIssuePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(issuePost, {
    onSuccess: () => {
      console.log('useIssuePost 성공');
      queryClient.invalidateQueries('allPost');
    },
    onError: () => {
      console.log('useIssuePost 실패');
    },
  });
  return mutation;
};

export const useFetchReadme = (name: string, enabled: boolean) => {
  return useQuery<string>(['readme'], () => fetchReadme(name), {
    enabled: enabled,
    onSuccess: () => {
      console.log('useFetchReadme 성공');
    },
    onError: () => {
      console.log('useFetchReadme 실패');
    },
  });
};

export const useFetchMyPost = () => {
  return useQuery<IPost[]>(['myPost'], () => fetchMyPost(), {
    onSuccess: () => {
      console.log('useFetchMyPost 성공');
    },
    onError: () => {
      console.log('useFetchMyPost 실패');
    },
  });
};

export const useInfinite = () => {
  return useInfiniteQuery<IPost[] | any>(
    ['posts'],
    ({ pageParam = 1 }) => fetchPost({ page: pageParam }),
    {
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page),
        pageParams: data.pageParams,
      }),
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nowPage !== pages[0].totalPage
          ? lastPage.nowPage + 1
          : undefined;
      },
    }
  );
};
