import styled from 'styled-components';

export const BoxWIthImageStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  position: relative;
  padding: 32px 0;
  margin-bottom: 64px;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px 0;
    grid-template-rows: unset;
  }

  grid-gap: 32px;


  &:after {
    content: '';
    background-color: #eaecf3;
    position: absolute;
    top: 0;
    right: -24px;
    width: 80%;
    height: 100%;
    z-index: -1;

    ${({ theme }) => theme.mq.tablet} {
      left: 0;
    }
  }

  h2 {
    text-transform: uppercase;
  }

  .box-wrapper {
    grid-column: 1;
    grid-row: 1/1;

    ${({ theme }) => theme.mq.tablet} {
      grid-column: 2;
    }
  }

  .text-box {
    padding: 0 32px;
    flex-direction: column;
    margin: auto;
    grid-column: 1;
    grid-row: 2/2;


    ${({ theme }) => theme.mq.tablet} {
      grid-row: 1;
      padding: 0 40px;
    }
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
    grid-gap: 48px;
    padding: 48px 0;
  }
`;
