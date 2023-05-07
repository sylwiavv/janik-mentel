import React from 'react';
import styled from 'styled-components';
import { ArrowDownIcon } from '../icons/ArrowDownIcon';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 32px 16px 16px;
  background-color: #1d3f43;
  color: #a6b5b9;
  border-radius: 40px;
  text-decoration: none;
  max-width: max-content;
  transition: background-color, color, .4s;
  overflow: hidden;
  margin-bottom: 80px;

  //grid-gap: 16px;

  ${({ theme }) => theme.mq.mobile} {
    padding: 8px 16px;
  }

  &:hover {
    color: #fff;
  }

  span {
    display: flex;
    margin-left: 16px;
  }

  div {
    display: flex;
    align-items: center;

    .svg-wrapper {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #fff;
      padding: 2px;
    }
  }
`;

export const ButtonWithIcon = ({ href, children }) => (
  <StyledButton href={href}>
    <div>
      <div className="svg-wrapper">
        <ArrowDownIcon height={28} width={28} />
      </div>
      {children}
    </div>
  </StyledButton>
);
