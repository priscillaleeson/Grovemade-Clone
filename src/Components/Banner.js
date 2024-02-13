import "./Banner.scss";
import StyledLink from "./StyledLink";

const Banner = (props) => {
  return (
    <a href={props.linktowebpage}>
      <div
        className="banner-block"
        style={{ backgroundImage: `url(${props.backgroundimageurl})` }}
      >
        <div>
          <h1>{props.title}</h1>
          <div className="sub-title-white">{props.subtitle}</div>
          <StyledLink
            name="Learn More"
            link={props.linktowebpage}
            isNavBar={false}
            isWhite
            topMargin
          />
        </div>
      </div>
    </a>
  );
};

export default Banner;
