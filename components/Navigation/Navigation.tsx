import styled from '@emotion/styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <span>Navigation</span>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled.aside`
  flex: 0 0 80px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
`;
