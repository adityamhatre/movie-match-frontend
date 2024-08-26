import React from "react";
import "../styles/ItsAMatch.css";

const ItsAMatch = (props) => {
  return (
    <div className="its-a-match">
      <img className="match-img" src={props.imgUrl} alt="Movie"></img>
      <span className="its-a-match-span">It's a match!</span>
    </div>
  );
};

export default ItsAMatch;
