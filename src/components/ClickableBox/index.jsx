import "./index.css";

function ClickableBox({ image, onClick }) {
  return (
    <div className="box-container" onClick={onClick}>
      <img src={image} alt="next" className="next-image" />
    </div>
  );
}

export default ClickableBox;
