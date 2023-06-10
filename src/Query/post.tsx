import { useMutation, useQuery, useQueryClient } from 'react-query';
import issuePost from '../Api/issuePost';
import fetchReadme from '../Api/fetchReadme';

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
