import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

interface LayoutProps {
  children: ReactNode;
}

const DynamicFriends = dynamic(() => import('components/Friends/Friends'));

const DynamicHeader = dynamic(() => import('components/Header/Header'));

const DynamicNavigation = dynamic(
  () => import('components/Navigation/Navigation')
);

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <DynamicHeader />
      <Container>
        <DynamicNavigation />
        <Section>{children}</Section>
        <DynamicFriends />
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.main`
  height: 100%;
`;

const Container = styled.section`
  display: flex;
  gap: 24px;
  height: 100%;
`;

const Section = styled.div`
  flex: 1;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.black_lighten_1};
`;
