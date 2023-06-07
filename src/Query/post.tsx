import { useMutation, useQueryClient } from 'react-query';
import issuePost from '../Api/issuePost';

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
