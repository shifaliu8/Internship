import React from "react";
import Button from "./Button";
import App from "../App";
import Styles from './Button.module.css'
// Define button styles
const viewButtonStyle = {
  backgroundColor: "blue",
  color: "white",
  // Add more styles as needed
};

const editButtonStyle = {
  backgroundColor: "green",
  color: "white",
  // Add more styles as needed
};

function Grid(props) {
  const isNineMin = props.time === "9 mins";
  const isFifteen = props.time === "15 mins";
  const imgSrc = isNineMin
    ? "./image/rosegold.jpg"
    : isFifteen
    ? "./image/cream.jpg"
    : props.img;

  let BgClassName = "";

  if (isNineMin) {
    BgClassName = "description-bg-nine";
  } else if (isFifteen) {
    BgClassName = "description-bg-fifteen";
  }

  return (
    <div className="col-lg-4 col-md-6">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={imgSrc} alt="Card" />
        <div className={`card_body ${Styles.card_body}`}>
          <p className={`card-text ${BgClassName}`}>
            {props.description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Button title="View" style={viewButtonStyle} />
              <Button title="New" style={viewButtonStyle} />
              <Button title="Edit" style={editButtonStyle} />
            </div>
          
          <small className={`text-muted ${BgClassName}`}>{props.time}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
