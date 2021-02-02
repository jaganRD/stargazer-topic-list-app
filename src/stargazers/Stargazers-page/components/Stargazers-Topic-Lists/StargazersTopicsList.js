import React from "react";
import "./StargazersTopicsList.css";
import RelatedTopics from "../Related-topic/RelatedTopic";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 

const StargazersTopicsList = (stargazer, index) => {
  return (
    <div className="topic-stargazers-section" key={index}>
      <Accordion  key={index} className="topic-stargazers-content">
        <AccordionSummary aria-controls="topic-content" id={index} expandIcon={<ExpandMoreIcon />}>
          <p className="stargazers__title">
              <strong> Title:</strong> {stargazer.stargazer.topic.name}
          </p>
          <p className="stargazers__title"><strong>Stargazers:</strong>{" "}
              {stargazer.stargazer.topic.stargazerCount}
          </p>
        </AccordionSummary>
        <AccordionDetails>
        <RelatedTopics
            data={stargazer.stargazer.topic.relatedTopics}
          ></RelatedTopics>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StargazersTopicsList;
