import { Textfit } from "react-textfit";
import "./Screen.css";
const Screen = ({ value, smallFont }) => {
  const screenStyle = {
    fontSize: smallFont ? "16px" : "24px", // Adjust the font size as needed
  };

  return <div className="screen" style={screenStyle}>{value}</div>;
};



export default Screen;