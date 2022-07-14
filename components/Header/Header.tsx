import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <span>Header</span>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 80px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
`;
