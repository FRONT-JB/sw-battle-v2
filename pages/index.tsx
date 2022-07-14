import styled from '@emotion/styled';

interface HomeProps {
  isLogin: boolean;
}

const Home = ({ isLogin }: HomeProps) => {
  return (
    <HomeContainer>
      {isLogin ? <div>LoggedIn</div> : <Text>Not LoggedIn</Text>}
    </HomeContainer>
  );
};

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {
      isLogin: true,
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
