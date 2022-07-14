import styled from '@emotion/styled';

const Friends = () => {
  return (
    <FriendsWrapper>
      <span>Friends</span>
    </FriendsWrapper>
  );
};

export default Friends;

const FriendsWrapper = styled.div`
  flex: 0 0 80px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
`;
