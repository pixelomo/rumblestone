import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import PropTypes from "prop-types";

class ButtonWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBackground: "",
      selectedColor: ""
    };
  }

  onClickRegion() {
    this.setState({
      selectedBackground: "rgb(255, 125, 8)",
      selectedColor: "#fff"
    });
    this.props.onClick();
  }

  render() {
    const { type, text, reset } = this.props;
    return (
      <ButtonWrapper>
        <Button
          className={type}
          bg={this.state.selectedBackground}
          color={this.state.selectedColor}
          text={text}
          reset={reset}
          type="region"
          onClick={() => this.onClickRegion()}
        />
      </ButtonWrapper>
    );
  }
}

ButtonWrap.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  reset: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonWrap;

////////////////////////// CSS //////////////////////////
const ButtonWrapper = styled.div``;
