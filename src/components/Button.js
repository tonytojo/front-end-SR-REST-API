//Note when we use function component we don't need to import react
import PropTypes from "prop-types";

//The function component Button
//Arguments:
//text = The text the button will have
//color = We might pass a color
//onClickScroll = Eventhandler to scoll to radio player i app.js
const Button = ({ text, color, onClickScroll }) => {
  return (
    <button style={{ backgroundColor: color }}
      /*style={myStyle} */ onClick={onClickScroll} className="btn">
      {text}
    </button>
  );
};

//Handling default backgroundColor settings
//If you don't pass a props color we use the default blue
Button.defaultProps = { color: "blue" };

//Make type checking on props
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClickScroll: PropTypes.func,
};
//CSS can exist in three modes. Inline, Internal and External
//Here we use internal
const myStyle = {
  backgroundColor: "green",
};

export default Button;
