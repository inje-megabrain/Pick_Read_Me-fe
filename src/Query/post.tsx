import { useMutation, useQuery, useQueryClient } from 'react-query';
import issuePost from '../Api/issuePost';
import fetchReadme from '../Api/fetchReadme';
import fetchPost from '../Api/fetchPost';
import { IPost } from 'src/Types/posts';

export const useFetchPost = () => {
  return useQuery<IPost[]>(['allPost'], () => fetchPost(), {
    onSuccess: () => {
      console.log('useFetchPost 성공');
    },
    onError: () => {
      console.log('useFetchPost 실패');
    },
  });
};

export const useIssuePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(issuePost, {
    onSuccess: () => {
      console.log('useIssuePost 성공');
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
