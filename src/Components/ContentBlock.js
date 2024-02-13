import "./ContentBlock.scss";
import StyledLink from "./StyledLink";

const ContentBlock = (props) => {
  return (
    <div className="content-block">
      <h1>{props.title}</h1>
      <div className="sub-title-grey">{props.description}</div>
      <div>
        <StyledLink link={props.link} name={props.name} />
      </div>
    </div>
  );
};

export default ContentBlock;
