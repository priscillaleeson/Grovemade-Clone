import "./Styled-Link.scss";

const StyledLink = (props) => {
  const isWhite = props.isWhite;
  const isNavBar = props.isNavBar;
  return (
    <div
      className={`
      styled-link
      ${isWhite ? "white" : "black"} 
      ${isNavBar ? "underline-on-hover" : ""}
      ${props.topMargin ? "styled-link-top-margin" : ""}
    `}
      onMouseOver={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
    >
      <a href={props.link}>{props.name}</a>
      <a href={props.link}>
        <div className={`underline`}></div>
      </a>
    </div>
  );
};

export default StyledLink;
