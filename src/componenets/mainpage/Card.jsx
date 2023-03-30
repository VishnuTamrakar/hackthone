import React from "react";

const Card = ({ obj }) => {
  const date1 = new Date(obj.created_at);
  const date2 = new Date();
  // console.log('date2.getTime()', date2.getTime());
  // console.log('date1.getTime()', date1.getTime());
  const differenceInTime = date2.getTime() - date1.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  let differenceInTime2  = Math.abs(date2 - date1);
  const differenceInHours = differenceInTime2 / (1000 * 3600);
  
  // console.log('differenceInDays', differenceInDays);
  return (
    <div className="box">
      <div className="insideElement">
        <div className="boxHead">
          <div className="image">
            <img src={obj.image} alt="" />
          </div>
          <div className="title">
            <h4>{obj.title.slice(0, 20)}</h4>
          </div>
        </div>

        <p>{obj.sammary.slice(0, 60)}...</p>

        <i>update {
          differenceInDays < 0 ?
          `${differenceInDays.toFixed(3)} day`:
          `${differenceInHours.toFixed(3)} Hours`
          } ago</i>
      </div>
    </div>
  );
};

export default Card;
