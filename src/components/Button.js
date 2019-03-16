import React from "react";
import styled from "styled-components";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBackground: "",
      selectedColor: ""
    };
  }

  onClickButton(region){
    this.setState({
      selectedBackground: "rgb(255, 125, 8)",
      selectedColor: '#fff',
    });
    this.props.onClick();
  }

  render() {
    const { type, text, disableRegions } = this.props;
    return (
      <ButtonComp 
        className={type} 
        selectedBackground={this.state.selectedBackground} 
        selectedColor={this.state.selectedColor} 
        disableRegions={disableRegions} 
        onClick={() => this.onClickButton()}
      >
        {text}
      </ButtonComp>
    );
  }
}

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
  pointer-events: ${props => (props.disableRegions > 0 ? 'none' : 'all')};
  background-color: ${props => (props.selectedBackground > "" ? props.selectedBackground : 'rgb(216, 216, 216)')};
  color: ${props => (props.selectedColor > "" ? props.selectedColor : 'rgb(35, 41, 47)')};
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
