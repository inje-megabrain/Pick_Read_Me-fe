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
import fetchMyPost from '../Api/fetchMyPost';
import fetchPostRank from '../Api/fetchPostByRank';
import createLike from '../Api/createLike';
import fetchPostById from '../Api/fetchPostById';

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

export const useLikePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createLike, {
    onSuccess: () => {
      console.log('useCreateLike 성공');
      queryClient.invalidateQueries('post');
    },
    onError: () => {
      console.log('useCreateLike 실패');
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
  return useQuery(['myPost'], () => fetchMyPost(), {
    onSuccess: () => {
      console.log('useFetchMyPost 성공');
    },
    onError: () => {
      console.log('useFetchMyPost 실패');
    },
  });
};

export const useFetchPostById = (id: number) => {
  return useQuery(['post'], () => fetchPostById(id), {
    onSuccess: () => {
      console.log('useFetchPostById 성공');
    },
    onError: () => {
      console.log('useFetchPostById 실패');
    },
  });
};

export const useInfinite = () => {
  return useInfiniteQuery<IPost[] | any>(
    ['posts'],
    ({ pageParam = 0 }) => fetchPost({ page: pageParam }),
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

export const useInfiniteRank = () => {
  return useInfiniteQuery<IPost[] | any>(
    ['postsRank'],
    ({ pageParam = 0 }) => fetchPostRank({ page: pageParam }),
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
