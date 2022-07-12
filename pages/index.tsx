import { useMemo } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { fetchPosts, usePosts } from '@/api/post';
import { QUERY_KEY } from '@/constants/query';
import useQueryData from '@/hooks/useQueryData';
import { PostTypes } from '@/types/post';

const Home: NextPage = () => {
  // const { data: posts, isFetching } = usePosts();
  const cachePost = useQueryData<PostTypes[]>(QUERY_KEY.GET_POST);

  // const postData = useMemo(() => {
  //   return posts?.filter((_, index) => index < 5);
  // }, [posts]);

  const cacheData = useMemo(() => {
    return cachePost?.filter((_, index) => index < 5);
  }, [cachePost]);

  return (
    <HomeContainer>
      <Text>NEXTJS Emotion</Text>
      <PostList>
        {cacheData?.map(({ id, title }) => (
          <PostListItem key={id}>{title}</PostListItem>
        ))}
      </PostList>
    </HomeContainer>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([QUERY_KEY.GET_POST], fetchPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  user-select: none;
`;

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const PostListItem = styled.li`
  font-size: 14px;
  text-align: center;
`;
