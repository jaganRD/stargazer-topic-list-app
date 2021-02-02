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
    <div className='main-page-section'>
    

     <img src={logo} alt="Girl in a jacket" width="300" height="200" />
      
      
      <div className="header-section">
        <h1 className="header-title" >GraphQL Star Gazers Topics APP</h1> 
        <Button variant="contained" onClick={gotoList}>Get Topics</Button>
      </div>

    
    </div>
  );
};

export default StargazersHomePage;
