import "./index.css";
import StrokedSquare from "../StrokedSquare";

function ClickableBox({ image, onClick }) {
  return (
    <div className="box-container" onClick={onClick}>
      <img src={image} alt="next" className="next-image" />
      <StrokedSquare/>
    </div>
  );
}

export default ClickableBox;
