import styled from 'styled-components';

export const GalleryContainer = styled.div`
  position: relative;
  padding: 64px 120px 64px 0;

  ${({ theme }) => theme.mq.mobile} {
    padding-right: 0
  }

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: -60%;
    width: 100%;
    background: #34476c0f;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: -1;

    ${({ theme }) => theme.mq.mobile} {
      width: 132%;
    }
  }
  
  a {
    color: #1a1a1a;
    text-decoration: none;
  }

  .page-link__txt {
    width: 50%;
    padding-right: 150px;
    min-height: 270px;
    position: relative;
    z-index: 1;

    ${({ theme }) => theme.mq.tablet} {
      padding-right: 72px;
    }

    ${({ theme }) => theme.mq.mobile} {
      border-radius: 4px;
      padding: 16px;
      background-color: #ffffffba;
      margin-top: auto;
      min-height: unset;
      max-width: 90%;
      width: max-content;
    }

    h3 {
      margin-top: 0;
      letter-spacing: .8px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .page-link__link {
      word-break: keep-all;
      display: flex;
      align-items: start;
      flex-direction: row;
      
      svg {
        height: 24px;
      }
      
      a {
        color: #252525;
        font-weight: 500;
        transition: color, .4s;
        
        &:hover {
          text-decoration: underline;
        }
      }

      svg {
        transition: margin-left, .4s;
      }
    }
  }

  .page-link {
    position: relative;
    z-index: 1;
    padding: 56px 0 56px 32px;
    overflow: hidden;
    margin-bottom: 72px;
    border: 24px solid white;
    background-color: white;
    border-radius: 4px;
    transition: background-color, .2s;
    box-shadow: 4px 7px 13px -11px rgba(66, 68, 90, 1);
    
    ${({ theme }) => theme.mq.tablet} {
      //height: 400px;
    }
    
    ${({ theme }) => theme.mq.mobile} {
      border: none;
      margin-bottom: 32px;
      padding: 48px 0 24px 24px;
      height: 400px;
    }

    &:hover {
      cursor: pointer;
      background-color: #f5f7fb;
      border-color: #f5f7fb;
      
      svg {
        margin-left: 8px;
      }

      .page-link__txt {
        &:before {
          height: calc(100% + 180px);
          top: -90px;
        }
      }
    }
  }

  .page-link__img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 260px;
    right: 0;
    
    ${({ theme }) => theme.mq.mobile} {
      left: 0;
    }
  }

  .page-link__img-inner {
    position: relative;
    width: 90%;
    left: 92px;
    height: 100%;

    ${({ theme }) => theme.mq.tablet} {
      left: 0;
      width: 100%;
    }

    ${({ theme }) => theme.mq.mobile} {
      left: 0;
      width: 100%;
    }

    img {
      border-radius: 4px;
      width: 100%;
      object-fit: cover;
      height: 100%;
      position: relative;
    }
  }
`;
