import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/InterviewMe.png";

const Card = ({obj}) => {
  const navigate = useNavigate()
  return (
    <div className="box" onClick={()=>{navigate('/single')}}>
      <div className="insideElement">
        <div className="boxHead">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="title">
            <h4>{obj.title}</h4>
          </div>
        </div>
        
        <p>
          {obj.sammary}
        </p>
       
       
        <i>update 6 days ago</i>
      </div>
    </div>
  );
};

export default Card;
