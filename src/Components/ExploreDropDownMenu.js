import "./DropDownMenu.scss";

const ExploreDropDownMenu = ({ timeoutIdRef }) => {
  return (
    <div
      className="menu-container"
      onMouseEnter={() => clearTimeout(timeoutIdRef.current)}
    >
      <div className="column">
        {/*This div holds title + underline hover*/}
        <div>
          <a href="https://grovemade.com/">
            <h2 className="column-title">About</h2>
            <div className="underline"></div>
          </a>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Our Story</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Origins</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Our Home</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Visit Us</div>
          </a>
        </div>
      </div>
      <div className="column">
        {/*This div holds title + underline hover*/}
        <div>
          <a href="https://grovemade.com/">
            <h2 className="column-title">Journal</h2>
            <div className="underline"></div>
          </a>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Customer Stories</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Design Stories</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Product Highlights</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Behind the Scenes</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Material Focus</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">View All</div>
          </a>
        </div>
      </div>
      <div className="column">
        {/*This div holds title + underline hover*/}
        <div>
          <a href="https://grovemade.com/">
            <h2 className="column-title">Connect</h2>
            <div className="underline"></div>
          </a>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Support</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Instagram</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Facebook</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Pinterest</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">LinkedIn</div>
          </a>
        </div>
      </div>
      <div className="explore-menu-image-container">
        <img
          src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-I1.jpg?auto=format&ixlib=python-1.1.2&w=900&s=32062e1273b57f14e3dc8f50e866aede"
          alt=""
          className="explore-menu-image"
        ></img>
        <a href="https://grovemade.com/">
          <div className="explore-menu-image-description">Our Story</div>
        </a>
      </div>
    </div>
  );
};

export default ExploreDropDownMenu;
