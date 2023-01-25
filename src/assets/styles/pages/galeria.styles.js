import styled from 'styled-components';

export const GalleryContainer = styled.div`
  position: relative;
  padding: 64px 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 64px ${(props) => (props.paddingRight ? props.paddingRight : '')} 64px 0;
  }

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    right: -30%;
    width: 80%;
    background-image: linear-gradient(to bottom, #f5f7fb, #eef1f7, #e7ebf3, #e0e4ef, #dadeeb, #dadeeb, #dadeeb, #dadeeb, #e0e4ef, #e7ebf3, #eef1f7, #f5f7fb);
    z-index: -1;

    ${({ theme }) => theme.mq.mobile} {
      width: 132%;
    }
  }

  .logo {
    position: absolute;
    bottom: 0;
    height: 406px;
    width: 406px;
    opacity: 0.04;
    left: 8%;
  }
}

a {
  color: ${({ theme }) => theme.colors.fontColor};
  text-decoration: none;
}

// PAGE LINK
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

  ${({ theme }) => theme.mq.mobile} {
    border: none;
    margin-bottom: 32px;
    padding: 48px 0 24px 24px;
    height: 400px;
  }

  .page-link__link {
    span {
      color: ${({ theme }) => theme.colors.fontColorHover};
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #f5f7fb;
    border-color: #f5f7fb;

    svg:not(.logo) {
      margin-left: 8px;
    }

    .page-link__txt {
      &:before {
        height: calc(100% + 180px);
        top: -90px;
      }
    }
  }

  // TEXT
  &__txt {
    width: 40%;
    padding-right: 150px;
    min-height: 270px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: end;

    ${({ theme }) => theme.mq.tablet} {
      padding-right: 40px;
    }

    ${({ theme }) => theme.mq.mobile} {
      border-radius: 2px;
      padding: 16px;
      background-color: #ffffffba;
      margin-top: auto;
      min-height: unset;
      max-width: 90%;
      width: 100%;
    }

    h3 {
      margin-top: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 24px;
      line-height: 1.4;
      font-size: ${({ theme }) => theme.fontSize.xl};

      ${({ theme }) => theme.mq.mobile} {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    }
  }

  // LINK
  &__link {
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

  // IMG
  &__img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 260px;
    right: 0;

    ${({ theme }) => theme.mq.tablet} {
      left: 100px;
    }

    ${({ theme }) => theme.mq.mobile} {
      left: 0;
    }
  }

  // IMG INNER
  &__img-inner {
    position: relative;
    width: 90%;
    left: 92px;
    right: 0;
    height: 100%;

    ${({ theme }) => theme.mq.tablet} {
      left: 264px;
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
}
`;
