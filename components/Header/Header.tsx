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
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
  box-shadow: ${({ theme }) => theme.shadow.base};
`;
