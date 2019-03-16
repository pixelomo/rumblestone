import React from "react";
import styled from "styled-components";
import "../flags.css";
import PropTypes from "prop-types";

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBorder: ""
    };
  }

  onClickPlayer() {
    if(this.props.votesCast < 3 && this.props.user === 'user'){
      this.setState({selectedBorder: "5px solid rgb(255, 125, 8)"});
    }
    this.props.onClick();
  }

  render() {
    const { name, avatar, user, message, country, percentage, votingClosed } = this.props;
    return (
      <PlayerComponent onClick={() => this.onClickPlayer()} votingClosed={votingClosed} user={user} selectedBorder={this.state.selectedBorder}>
        <span>{percentage}%</span>
        <img src={avatar} alt={name} />
        <h3>
          {name}
          <i className={"famfamfam-flag-" + country} />
        </h3>
        <p>{message}</p>
      </PlayerComponent>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  user: PropTypes.string,
  onClick: PropTypes.func,
  votesCast: PropTypes.number,
  message: PropTypes.string,
  country: PropTypes.string,
  percentage: PropTypes.number,
  votingClosed: PropTypes.bool,
};

export default Player;

////////////////////////// CSS //////////////////////////
const PlayerComponent = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  width: calc(100% / 7 - 40px);
  margin: 10px;
  font-size: 12px;
  position: relative;
  pointer-events: ${props => (props.selectedBorder > "" ? 'none' : 'all')};
  &:hover {
    cursor: pointer;
    img {
      border: 5px solid rgb(255, 125, 8);
      box-shadow: 3px 3px 15px 2px rgba(255, 125, 8, 0.52), -3px -3px 15px 2px rgba(255, 125, 8, 0.52);
    }
  }
  h3 {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  h4 {
    font-size: 16px;
  }
  p {
    text-align: left;
  }
  img {
    width: 80px;
    display: block;
    margin: 10px auto;
    border-radius: 50%;
    border: ${props => (props.selectedBorder > "" ? props.selectedBorder : '5px solid rgb(71, 81, 93)')};
    box-shadow: ${props => (props.selectedBorder > "" ? '3px 3px 15px 2px rgba(255, 125, 8, 0.52), -3px -3px 15px 2px rgba(255, 125, 8, 0.52);' : 'none')};
    transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  span {
    position: relative;
    width: 50px;
    display: block;
    margin: 0 auto -24px;
    z-index: 2;
    background-color: rgb(216, 216, 216);
    color: black;
    padding: 1px 5px;
    border-radius: 3px;
    opacity: ${props => (props.votingClosed || props.user === 'admin' ? 1 : 0)};
  }
  i {
    background-image: url("https://cdn.dekki.com/assets/images/famfamfam-flags.png");
    background-repeat: no-repeat;
    margin: 3px 10px 0;
  }
`;
