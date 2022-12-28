import styled from 'styled-components';

export const BoxWIthImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 56px 0;
  margin-bottom: 64px;

  &:after {
    content: '';
    background-color: #eaecf3;
    position: absolute;
    top: 0;
    left: 80px;
    width: 80%;
    height: 100%;
    z-index: -1;
  }

  h2 {
    text-transform: uppercase;
  }

  .box-wrapper {
    flex: 0 0 16%;
    max-width: 50%;
  }

  .text-box {
    padding: 0 32px;
    flex-direction: column;
    margin: auto;
  }

  .text-wrapper {
    display: flex;
    width: 100%;
  }

  .box-image {
    height: 100%;
    width: 100%;

    background-image: url(https://images.unsplash.com/photo-1602605786056-da87eadb5126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80);
    background-position: 58% 58%;
    padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding: 32px 0;
  }
`;
