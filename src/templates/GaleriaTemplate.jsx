// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';

const GaleriaTemplate = ({ data: { post: { title } } }) => (
  <h1>{title}</h1>
);

export const query = graphql`
    query($id: String) {
      post: contentfulBlog(id: {eq: $id}) {
        id
        title
        }
     }
`;

export default GaleriaTemplate;
