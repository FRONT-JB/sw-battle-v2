import styled from '@emotion/styled';

interface ProgressBarProps {
  rate: number;
  heightVariant?: number;
}

const ProgressBar = ({ rate, heightVariant = 6 }: ProgressBarProps) => {
  return (
    <ProgressBarWrapper heightVariant={heightVariant}>
      <ProgressBarRate rate={rate} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div<{ heightVariant: number }>`
  height: ${({ heightVariant }) => `${heightVariant}px`};
  background: ${({ theme }) => theme.colors.black_lighten_2};
  border-radius: 10px;
`;

const ProgressBarRate = styled.div<{ rate: number }>`
  width: ${({ rate }) => `${rate}%`};
  height: 100%;
  background: ${({ theme }) => theme.gradient.purple};
  transition: width 0.5s ease;
  border-radius: 10px;
`;
