import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { QUERY_KEY } from '@/constants/query';
import { PostTypes } from '@/types/post';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

export const usePosts = () => {
  return useQuery<PostTypes[]>([QUERY_KEY.GET_POST], fetchPosts);
};
