import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { getPageSlug } from '../helpers/getPageSlug';
import { StyledTitle } from '../components/HighlightedHeading/HighlightedHeading.styles';
import { HeroImage } from '../assets/styles/pages/homepage.styles';
import { Box } from '../components/Boxes/Boxes.styles';
import { GalleryContainer } from '../assets/styles/pages/galeria.styles';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import { ButtonStyled } from '../components/Button/ButtonStyled';
import ArrowShortRight from '../components/icons/ArrowShortRight';

// eslint-disable-next-line react/prop-types
export const OutRowWrap = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const OutRow = styled.div`
  display: flex;
  margin: 0 -25px;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
  align-items: center;
  //background-color: #6b9a6b;
`;

export const LeftColumn = styled.div`
  //background-color: #5195c0;
  width: 50%;
  margin: 0px 0px 0px 0px !important;
  transform: translate3d(25%, 0px, 0);
  z-index: 3;

  .tatsu-column {
    margin: 0;
  }

  .tatsu-column-inner {
    transform: translate3d(0px, 14px, 0px); //dynamic
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    .tatsu-column-pad-wrap {
      position: relative;
      z-index: 2;

      width: 100%;
      //background-color: cadetblue;

      .tatsu-column-pad {
        padding: 100px 0px 100px 0px;

        .tatsu-module {
          margin: 0px 0px 30px 0px;
        }

        .tatsu-single-image {
          width: 100%;
          line-height: 0;

          .tatsu-single-image-inner {
            position: relative;
            transition: background-color .3s;
            overflow: hidden;
            width: 400px;

            .tatsu-single-image-padding-wrap {
              padding-bottom: 157.605985037%;
            }
          }
        }
      }
    }

    .tatsu-column-bg-image-wrap, .tatsu-column-bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const RightColumn = styled.div`
  display: flex;
  //background-color: gray;
  width: 50%;
  transform: translate3d(0px, 0px, 0);
  margin: 0 0 50px;
  align-items: stretch;

  .tatsu-column-inner {
    transform: translate3d(0px, 24px, 0px); //dynamic
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    .tatsu-column-pad-wrap {
      position: relative;
      z-index: 2;

      width: 100%;

      .tatsu-column-pad {
        padding: 0;

        .tatsu-module {
          //margin: 0px 0px 30px 0px;
        }

        .tatsu-single-image {
          width: 100%;
          line-height: 0;

          .tatsu-single-image-inner {
            position: relative;
            transition: background-color .3s;
            overflow: hidden;
            width: 400px;

            .tatsu-single-image-padding-wrap {
              padding-bottom: 157.605985037%;
            }

            img {
              max-width: 100%;
              height: auto;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }

    .tatsu-column-bg-image-wrap, .tatsu-column-bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Galeria = ({ data: { posts: { nodes } }, data }) => (
  <>
    <Box isColumn marginBottom="64px">
      <StyledTitle>Galeria</StyledTitle>
      <p>Zapraszamy do obejrzenia zdjęć z sesji zdjęciowych wykonanych przez nasze studio.</p>
    </Box>
    <GalleryContainer paddingRight="260px">
      {nodes.map((n) => (
        <Link key={n.id} to={getPageSlug(n.galeriaTitle)}>
          <Box className="page-link" key={n.galeriaTitle} gap="32px" spaceBetween>
            <HeroImage className="pattern" imageSource={data.homepage.publicURL} />
            <Box isColumn className="page-link__txt" noMarginBottom>
              <h3>{n.galeriaTitle}</h3>
              <Box gap="8px" className="page-link__link" isCenter noMarginBottom>
                <span>
                  Zobacz więcej (add hover)
                </span>
                <ArrowRightIcon height="24px" />
              </Box>

            </Box>
            <Box className="page-link__img" isGap noMarginBottom>
              <div className="page-link__img-inner">
                <img src={n.galeriaAsets[0].file.url} alt="" loading="lazy" />
              </div>
              {/* <HeroImage className="image-abs" imageSource={n.galeriaAsets[0].file.url} height="350px" width="800px" /> */}
            </Box>
          </Box>
        </Link>
      ))}
    </GalleryContainer>
    <OutRowWrap>
      <OutRow>
        <LeftColumn>
          <div className="tatsu-column-inner ">
            <div className="tatsu-column-pad-wrap">
              <div className="tatsu-column-pad">
                <div className="tatsu-module">
                  <div className="tatsu-inline-text-inner">
                    <h2 style={{ fontWeight: '600', textTransform: 'uppercase' }}>Kacper i Sylwia</h2>
                    <p>Zobacz więcej zdjęć z tej sesji</p>
                  </div>
                </div>
                <div className="tatsu-module">
                  <ButtonStyled isCircle><ArrowShortRight /></ButtonStyled>
                </div>
              </div>
            </div>
            <div className="tatsu-column-bg-image-wrap">
              <div className="tatsu-column-bg-image"></div>
            </div>
          </div>

        </LeftColumn>
        <RightColumn>
          <div className="tatsu-column-inner ">
            <div className="tatsu-column-pad-wrap">
              <div className="tatsu-column-pad">
                <div
                  className="tatsu-single-image tatsu-module tatsu-habjlqkwhobuof0i  "
                  data-animation="fadeIn"
                >
                  <div className="tatsu-single-image-inner">
                    <div
                        className="tatsu-single-image-padding-wrap"
                      >
                      </div>
                    <img
                        className="tatsu-gradient-border"
                        src=" https://oshinewptheme.com/v35/wp-content/uploads/sites/42/2017/12/home-office-suite.jpg"
                      />
                  </div>
                </div>
              </div>
            </div>
            <div className="tatsu-column-bg-image-wrap">
              <div className="tatsu-column-bg-image"></div>
            </div>
          </div>
        </RightColumn>
      </OutRow>
    </OutRowWrap>
  </>
);

export const query = graphql`
    query {
        posts: allContentfulGaleria {
         nodes {
            galeriaTitle
            id
            galeriaAsets {
               file {
                   url
               }
            }
         }
        },
           homepage: file(relativePath: {regex: "/homepage\/icon_pattern.svg/"}) {
            publicURL
        }
    }

    `;

export default Galeria;
