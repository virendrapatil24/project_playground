const Button = (props) => {
  return (
    <>
      <button style={{ backgroundColor: props.color }} onClick={props.onclick}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
