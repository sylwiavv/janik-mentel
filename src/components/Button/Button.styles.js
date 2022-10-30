import styled from 'styled-components';

export const ButtonStyles = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.fontColorSecondary_hover};
  background-color: ${({ theme }) => theme.colors.fontColorSecondary_hover};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  letter-spacing: .4px;
  padding: 8px 16px;
  border-radius: 4px;
  max-width: max-content;
  margin-top: 32px;
`;
