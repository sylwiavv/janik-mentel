import { graphql, useStaticQuery } from "gatsby";

export const useHeaderStaticQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulSlider {
          nodes {
            slider {
              url
              id
            }
          }
        }
      }
    `
  );
  return data.allContentfulSlider.nodes;
};
