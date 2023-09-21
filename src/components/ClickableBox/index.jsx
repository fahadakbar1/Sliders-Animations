import "./index.css";
import StrokedSquare from "../StrokedSquare";

function ClickableBox({ image, next, onClick, strokeKey }) {
  return (
    <div className="box-container" onClick={onClick}>
      <div className="box-inner-container">
        <div
          className="next-image"
          style={{ backgroundImage: `url(${next})` }}
        ></div>
        <div
          className="box-image-part box-top-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="box-image-part box-bottom-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <StrokedSquare key={strokeKey} />
    </div>
  );
}

export default ClickableBox;
