import "./Navbar.scss";
import StyledLink from "./StyledLink";

import { useRef, useState } from "react";
import ShopDropDownMenu from "./ShopDropDownMenu";
import ExploreDropDownMenu from "./ExploreDropDownMenu";

const Navbar = () => {
  //functions to execute onHover navbar dropdown menu
  const [isShown, setIsShown] = useState(false);

  const [activeTab, setActiveTab] = useState(null);

  const handleMouseOver = () => {
    console.log("is shown");
    setIsShown(true);
  };
  const handleMouseOut = () => {
    setIsShown(false);
  };

  /**
   * What we need to do, is to only handle mouse out after a certain amount of time
   * in case the user interacts with the popup.
   *
   */
  const timeoutIdRef = useRef();
  return (
    <>
      <div className="navbar-height" />
      <div className="navbar">
        <nav className="nav-menu">
          <div className="dropdown">
            <div className="link">
              <StyledLink
                // handleMouseOver={handleMouseOver}
                // handleMouseOut={handleMouseOut}
                handleMouseOver={() => setActiveTab("shop")}
                handleMouseOut={() => {
                  timeoutIdRef.current = setTimeout(() => {
                    setActiveTab(null);
                  }, 1000);
                }}
                name="Shop"
                link="https://grovemade.com/desk-shelf-system/"
                isWhite={false}
                isNavBar={true}
              />
            </div>
            <div className="link">
              <StyledLink
                // handleMouseOver={handleMouseOver}
                // handleMouseOut={handleMouseOut}
                handleMouseOver={() => setActiveTab("explore")}
                handleMouseOut={() => setActiveTab(null)}
                name="Explore"
                link="https://grovemade.com/desk-shelf-system/"
                isWhite={false}
                isNavBar={true}
              />
            </div>
          </div>
          <div className="logo">
            {/* 
            this is a URL, a 
            https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL
            src="<INSERT A URL>";
            import x from "<INSERT A FILE PATH>";
          */}
            <a href="#">
              <img src="/logo.svg" />
            </a>
          </div>
          <div className="link right-nav">
            <a href="#">My Cart</a>
          </div>
        </nav>
      </div>

      {activeTab === "shop" && <ShopDropDownMenu timeoutIdRef={timeoutIdRef} />}
      {activeTab === "explore" && (
        <ExploreDropDownMenu timeoutIdRef={timeoutIdRef} />
      )}
      {/* {isShown && <ShopDropDownMenu />}
      {isShown && <ExploreDropDownMenu />} */}
    </>
  );
};

export default Navbar;
