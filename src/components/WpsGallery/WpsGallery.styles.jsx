import styled from "styled-components";

export const GalleryWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-auto-flow: row dense;
  overflow: hidden;

  ${({ theme }) => theme.mq.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 280px;
  }

  .single {
    cursor: pointer;
    background-color: #34476c0f;
    transition: background-color, 0.4s;

    &:nth-child(3n) {
      grid-row-end: span 2;
    }

    &:nth-child(5n) {
      grid-row-end: auto;
    }

    &:nth-child(6n) {
      grid-row-end: auto;
    }

    &:nth-child(7n) {
      grid-column-end: span 2;
      grid-row-end: span 2;

      ${({ theme }) => theme.mq.mobile} {
        grid-column-end: unset;
      }
    }

    &:last-child {
      grid-column-end: auto;
      grid-row-end: auto;
    }

    img {
      max-width: 100%;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: transform, 0.4s;

      &:hover {
        transform: scale(1.03);
      }
    }
  }
`;

export const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(0 0 0 / 67%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .btnClose {
    top: 32px;
    right: 60px;

    ${({ theme }) => theme.mq.mobile} {
      right: 24px;
    }
  }

  .btnPrev {
    top: 50%;
    transform: translateY(-50%);
    left: 60px;

    ${({ theme }) => theme.mq.mobile} {
      left: 24px;
    }
  }

  .btnNext {
    top: 50%;
    transform: translateY(-50%);
    right: 60px;

    ${({ theme }) => theme.mq.mobile} {
      right: 24px;
    }
  }

  svg {
    path {
      fill: white;
    }
  }

  .btnClose,
  .btnPrev,
  .btnNext {
    position: fixed;
    cursor: pointer;
    opacity: 0.7;
    z-index: 9999;
    transition: opacity, 0.4s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const FullScreenImage = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    user-select: none;
  }
`;
