import React from "react";
import "./RelatedTopic.css";


const RelatedTopics= (data) => {
  return (
    <div   className="stargazers-table">
      {data.data.length > 0 ? <div>
        <table>   
        <thead>
          <tr className="stargazers-header">
            <td className="stargazers-header-data">Topic</td>
            <td className="stargazers-header-data">Count</td>
          </tr>
        </thead>
        <tbody className="stargazers-header-body">
        {data.data.map((relatedTopic, index) => {
          return (     
            <tr className="stargazers-body-row" key={index }>
              <td className="stargazers-body-data">{relatedTopic.name}</td>
              <td  className="stargazers-body-data">{relatedTopic.stargazerCount}</td>
            </tr>         
          )
        })}
        </tbody>
      </table>
      </div>: (
        <p>No stargaers are found!!!</p>
      )}
    </div>
  );
};

export default RelatedTopics;