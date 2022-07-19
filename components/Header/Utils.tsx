import styled from '@emotion/styled';

import { calcExperience } from '@/utils/exp';

import ProgressBar from 'components/Common/Progress/ProgressBar';

const dummyInfo = {
  levels: {
    exp: 875,
    nextExp: 1000,
  },
};

const Utils = () => {
  const { exp, nextExp } = dummyInfo.levels;

  return (
    <UtilsWrapper>
      <div>
        <UtilsLevelInfo>
          <UtilsLevelInfoTitle>Next</UtilsLevelInfoTitle>
          <UtilsLevelInfoValue>{exp} EXP</UtilsLevelInfoValue>
        </UtilsLevelInfo>
        <ProgressBar rate={calcExperience(exp, nextExp)} />
      </div>
    </UtilsWrapper>
  );
};

export default Utils;

const UtilsWrapper = styled.div`
  width: 200px;
`;

const UtilsLevelInfo = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const UtilsLevelInfoTitle = styled.dt`
  color: ${({ theme }) => theme.colors.black_lighten_3};
  flex: 0 0 40px;
  font-size: 14px;
  user-select: none;
`;

const UtilsLevelInfoValue = styled.dd`
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  text-align: right;
  font-size: 14px;
  user-select: none;
`;
