import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StargazersModel from "../StargazersModel/StargazersModel";
import TextField from '@material-ui/core/TextField';
import "./Stargazers.css";
import Button from '@material-ui/core/Button';

const Stargazers = () => {
  const history = useHistory()
  const [topic, setTopic] = useState("frontEnd");

  const topicHandler = (e) => {
    setTopic(e.target.value);
  };

  const gotoHome = () => {
    history.push('/');
  };

  return (
    <div className='graphql-topic'>
      <div className='search-section'>
        <Button data-testid="btn-home" variant="contained" onClick={gotoHome} className='home-button'>Go Home</Button>
        <div className='search-section-text'>
          <label className='search-label'>
            <strong>Search for Topic Name:</strong>
          </label>
          <TextField 
            className='search-field'
            label="search topic"
            variant="outlined"
            value={topic}
            name="topic"
            onChange={topicHandler}
          >
          </TextField>
        </div>
      </div>

      <StargazersModel node={topic}></StargazersModel>
    </div>
  );
};

export default Stargazers;
