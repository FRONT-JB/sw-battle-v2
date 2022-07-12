import { useQueryClient } from 'react-query';

const useQueryData = <T>(queryKey: string | string[]) => {
  const queryClient = useQueryClient();
  const queryData = queryClient.getQueryData<T>(queryKey);
  return queryData;
};

export default useQueryData;
