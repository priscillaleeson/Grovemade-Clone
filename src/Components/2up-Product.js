import StyledLink from "./StyledLink";
import "./2up-Product.scss";

const TwoUpProductGrid = (props) => {
  return (
    <div className="twoup-product-container">
      <a href={props.linktowebpageone}>
        <div className="product">
          <div className="image-container">
            <img src={props.imageone} />
          </div>
          <h2>Desk Pads</h2>
          <div>
            <StyledLink
              name="Learn More"
              isWhite={false}
              isNavBar={false}
              link="https://grovemade.com/desk-pad-collection/"
              topMargin
            />
          </div>
        </div>
      </a>
      <a href={props.linktowebpagetwo}>
        <div className="product">
          <div className="image-container">
            <img src={props.imagetwo} />
          </div>
          <h2>Laptop Stands</h2>
          <div>
            <StyledLink
              name="Learn More"
              isWhite={false}
              isNavBar={false}
              link="https://grovemade.com/laptop-stands/"
              topMargin
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default TwoUpProductGrid;
