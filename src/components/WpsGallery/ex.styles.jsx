import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  max-width: 620px;
  margin: 0 auto;
  
  .single {
    width: 500px;
    cursor: pointer;

    img {
      max-width: 100%;
      
      &:hover {
        transform: scale(1.02);
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
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .btnClose {
    top: 40px;
    right: 40px;
  }

  .btnPrev {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
  }

  .btnNext {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
  }

  .btnClose, .btnPrev, .btnNext {
    position: fixed;
    cursor: pointer;
    opacity: 0.6;
    color: #fff;
    z-index: 9999;

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
