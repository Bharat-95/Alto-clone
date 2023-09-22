import React from 'react'
import { graphql } from 'gatsby';

const Home = ({data}) => {

  const altoData = data.allContentfulAlto.edges;
  return (
    <div>
      {altoData.map(({ node }) => (
        <div key={node.name}>
          <h1>{node.name}</h1>
          <p>Occupation: {node.occupation}</p>
          <div dangerouslySetInnerHTML={{ __html: node.description.raw }} />
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulAlto {
      edges {
        node {
          name
          occupation
          description {
            raw
          }
        }
      }
    }
  }
`;

export default Home;