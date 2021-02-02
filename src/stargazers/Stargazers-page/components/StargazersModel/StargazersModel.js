import React from "react";
import { useQuery } from "@apollo/client";
import StargazersList from "../Stargazers-Topic-Lists/StargazersTopicsList";
import { GET_TOPICS_LIST } from "../../../model/StargazersQuery";

function StargazersModel(node) {
  const name = node.node;
  const { loading, error, data } = useQuery(GET_TOPICS_LIST, {
    variables: { name },
  });
  if (loading) return "Loading...";
  if (error) return `Error occured while fetching data: ${error.message}`;
  return (
    <div>
      {data && data.search && data.search.nodes
        ? data.search.nodes.map((node, nodeIndex) => {
            return (
              <div key={nodeIndex}>
                {node.repositoryTopics.nodes.map((stargazer, topicNodeIndex) => (
                    <StargazersList
                      stargazer={stargazer}
                      key={topicNodeIndex}
                    />
                ))}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default StargazersModel;
