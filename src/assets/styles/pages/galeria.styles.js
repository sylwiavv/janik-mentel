import styled from 'styled-components';

export const GaleryContainer = styled.div`
  position: relative;
  padding: 64px 0;
  padding-right: 120px;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: -60%;
    width: 100%;
    background: #34476c0f;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
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

    h3 {
      letter-spacing: .8px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .page-link__link {
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
    padding: 60px 0;
    overflow: hidden;
    margin-bottom: 72px;
    border:24px solid white;
    background-color: white;
    padding-left: 32px;
    border-radius: 40px;
    transition: background-color, .2s;
    box-shadow: 4px 7px 13px -11px rgba(66, 68, 90, 1);


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
  }

  .page-link__img-inner {
    position: relative;
    width: 90%;
    left: 92px;
    height: 100%;

    img {
      border-radius: 40px;
      width: 100%;
      object-fit: cover;
      height: 100%;
      position: relative;
    }
  }
`;
export const PatternContainer = styled.div`

`;
