import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  margin-top: 64px;

  ${({ theme }) => theme.mq.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

/// / to remove
export const StyledHeading = styled.h5`
  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: 600;
  letter-spacing: .4px;
  text-transform: uppercase;;
`;
