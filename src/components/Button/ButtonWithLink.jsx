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
  }
`;

export const SvgWrapper = styled.div`
  animation: fade 1s ease-in 1s;
  animation-fill-mode: forwards;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 2px;
  background-color: transparent;

  @keyframes fade {
    0% {
      background-color: transparent;
    }

    100% {
      background-color: #fff;
    }
  }
`;

export const ButtonWithIcon = ({ href, children }) => (
  <StyledButton href={href}>
    <SvgWrapper>
      <ArrowDownIcon height={28} width={28} />
    </SvgWrapper>
    {children}
  </StyledButton>
);
