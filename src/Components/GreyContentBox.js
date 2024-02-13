import "./GreyContentBox.scss";

const GreyContentBox = () => {
  return (
    <div className="box-container">
      <div className="grey-box">
        <div className="grey-box-content">
          <div className="icon-container">
            <img
              src="https://siteleaf.grovemade.com/uploads/gm_logo_small.png"
              alt=""
              className="leaf-icon"
            />
          </div>
          <h1 className="box-title">Design Inspires</h1>
          <div className="box-subtitle">
            Build your dream workspace, so you can get your best work done.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreyContentBox;
