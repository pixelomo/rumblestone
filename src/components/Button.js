import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Button extends React.Component {

  render() {
    const { type, text, reset, bg, color } = this.props;
    return (
      <ButtonComp 
        className={type} 
        bg={bg} 
        color={color} 
        reset={reset}
        onClick={() => this.props.onClick()}
      >
        {text}
      </ButtonComp>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  reset: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;

////////////////////////// CSS //////////////////////////
const ButtonComp = styled.button`
  position: relative;
  vertical-align: top;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
  background-color: ${props => (props.reset ?  'rgb(216, 216, 216)' : props.bg ? props.bg : 'rgb(216, 216, 216)')};
  color: ${props => (props.reset ? 'rgb(35, 41, 47)' : props.color ? props.color : 'rgb(35, 41, 47)')};
  transition: 0.3s ease-in-out;
  margin: 0 5px 0 20px;
  border-radius: 3px;
  border: none;
  padding: 10px 15px;

  &:hover,
  &.selected {
    background-color: rgb(255, 125, 8);
    color: rgb(255, 255, 255);
  }
  &.selected {
    pointer-events: none;
  }
  &.login {
    width: 200px;
    margin: 10px auto;
  }
  &.logout {
    position: absolute;
    border-radius: 0;
    background-color: rgb(255, 125, 8);
    color: rgb(255, 255, 255);
    right: 0;
    top: 0;
    width: 150px;
    margin: 0;
    text-transform: uppercase;
  }
  &.closeVoting{
    display: block;
    margin: 30px auto;
    width: 200px;
    text-transform: uppercase;
    background-color: rgb(255, 125, 8);
    color: rgb(255, 255, 255);
  }
`;
