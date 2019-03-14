import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { playersData } from "../components/playersData";
import PropTypes from "prop-types";
import Regions from './Regions'

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log(playersData);
  }

  render() {
    return (
      <Wrapper>
        <img src="http://cdn.dekki.com/uploads/tournaments/rumblestone/logo.png"/>
        <h1>Vote for player's to represent your region</h1>
        <p>Select your region to browse players.</p>
        <p>NOTE: you may only vote for one region.</p>
        <Regions/>
        {/* <BoardContainer winner={winner !== ""}>{this.renderSlots()}</BoardContainer> */}
        {/* <Score score={this.props.score} player={this.props.player}/> */}
      </Wrapper>
    );
  }
}

const stateToProps = state => {
  return {
    winner: state.winner,
    player: state.player,
    board: state.board,
    score: state.score
  };
};

Board.propTypes = {
  winner: PropTypes.string,
  player: PropTypes.string,
  dispatch: PropTypes.func,
  score: PropTypes.object,
};

export default connect(stateToProps)(Board);

////////////CSS/////////////
const Wrapper = styled.div`
  position: relative;
  /* @import url("https://fonts.googleapis.com/css?family=Pacifico"); */
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: rgb(35, 41, 47);
  color: #f2f2f2;
`;