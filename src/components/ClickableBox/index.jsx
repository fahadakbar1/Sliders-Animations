import "./index.css";
import StrokedSquare from "../StrokedSquare";

function ClickableBox({ image, onClick, strokeKey }) { // Accept the new prop
  return (
    <div className="box-container" onClick={onClick}>
      <img src={image} alt="next" className="next-image" />
      <StrokedSquare key={strokeKey} /> {/* Use the prop as a key */}
    </div>
  );
}

export default ClickableBox;
