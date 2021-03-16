import React from "react";
import { useHistory } from "react-router-dom";
import  "./StargazersHomePage.css";
import logo from './graph.png';
import Button from '@material-ui/core/Button';


const StargazersHomePage = () => {
  
  const history = useHistory()

  const gotoList = () => {
    history.push('/topicList');
  };

  return (
    <div data-testid="main-page-section" className='main-page-section'>
    

     <img src={logo} alt="graph logo" data-testid="graph-logo" width="300" height="200" />
      
      
      <div  data-testid="header-section" className="header-section">
        <h1 className="header-title" >GraphQL Star Gazers Topics APP</h1> 
        <Button  data-testid="topics-button" variant="contained" onClick={gotoList}>Get Topics</Button>
      </div>

    
    </div>
  );
};

export default StargazersHomePage;
