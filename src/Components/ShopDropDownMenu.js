import "./DropDownMenu.scss";

const ShopDropDownMenu = ({ timeoutIdRef }) => {
  return (
    <div
      className="menu-container"
      onMouseEnter={() => clearTimeout(timeoutIdRef.current)}
    >
      <div className="column">
        {/*This div holds title + underline hover*/}
        <div>
          <a href="https://grovemade.com/">
            <h2 className="column-title">Shop</h2>
          </a>
          <div className="underline"></div>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Shop All</div>
          </a>
        </div>
      </div>
      <div className="column">
        {/*This div holds title + underline hover*/}
        <div>
          <a href="https://grovemade.com/">
            <h2 className="column-title">Mouse/Desk Pads</h2>
          </a>
          <div className="underline"></div>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Desk Pads</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Mouse Pads</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Coasters</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">View All</div>
          </a>
        </div>
      </div>
      <div className="column">
        {/*This div holds title + underline hover*/}
        <a href="https://grovemade.com/">
          <h2 className="column-title">Stands</h2>
        </a>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Desk Shelves</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Monitor Stands</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Laptop Stands</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Headphone Stands</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">iPhone Docks</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">iPad Stands</div>
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
            <h2 className="column-title">Tools</h2>
          </a>
          <div className="underline"></div>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Pen</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Stationary</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Notebooks</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Knives</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Trays</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Pen Cups & Planters</div>
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
            <h2 className="column-title">Keyboard</h2>
          </a>
          <div className="underline"></div>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Apple Keyboard Tray</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Apple Trackpad Tray</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Wrist Rests</div>
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
            <h2 className="column-title">Wall Mounted</h2>
          </a>
          <div className="underline"></div>
        </div>
        <div className="column-items-container">
          <a href="https://grovemade.com/">
            <div className="column-item">Catch-All</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">Wall Shelves</div>
          </a>
          <a href="https://grovemade.com/">
            <div className="column-item">View All</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopDropDownMenu;
