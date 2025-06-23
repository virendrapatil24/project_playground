import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
      <p>card ends here</p>
    </div>
  );
};

export default Card;
