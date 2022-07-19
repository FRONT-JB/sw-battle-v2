import styled from '@emotion/styled';

import Utils from './Utils';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <Utils />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 0 24px;
  height: 80px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
  box-shadow: ${({ theme }) => theme.shadow.base};
`;

const Logo = styled.h1``;
