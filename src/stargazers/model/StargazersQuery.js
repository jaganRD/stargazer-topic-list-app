import { gql } from "@apollo/client";

export const GET_TOPICS_LIST = gql`
  query getTopics($name: String!) {
    search(query: $name, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
                stargazerCount
                relatedTopics(first: 10) {
                  name
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
