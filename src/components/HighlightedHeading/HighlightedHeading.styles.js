import styled from 'styled-components';

export const StyledTitle = styled.h1`
  // font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

//
export const StyledHeading = styled.h5`
  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: 600;
  letter-spacing: .4px;
  text-transform: uppercase;;
`;