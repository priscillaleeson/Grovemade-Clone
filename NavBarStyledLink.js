const NavBarStyledLink = () => {
  return (
    <div>
      <div className={`styled-link ${isWhite ? "white" : "black"}`}>
        <a href={props.link}>{props.name}</a>
        <a href={props.link}>
          <div className="underline"></div>
        </a>
      </div>
    </div>
  );
};
