import React from "react";
import styled from "styled-components";

class Button extends React.Component {
  render() {
    return (
      <ButtonComp className='region' onClick={() => this.props.onRegionSelected()}>
        {this.props.text}
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
    background-color: rgb(216, 216, 216);
    color: rgb(35, 41, 47);
    transition: .3s ease-in-out;
    margin: 0 5px 0 20px;
    border-radius: 3px;
    border: none;
    /* // selected */
    /* background-color: rgb(255, 125, 8);
    color: rgb(255, 255, 255); */
    padding: 10px 15px;

    &:hover, &.selected{
        background-color: rgb(255, 125, 8);
        color: rgb(255, 255, 255);
    }
    &.selected{pointer-events: none;}
`;
