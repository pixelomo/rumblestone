import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../components/Button";
const regionList = ['Japan', 'Taiwan', 'Hong Kong', 'South East Asia']

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  regionSelected(region){
    console.log(region)
  }

  renderButtons(){
    return regionList.map( region => (
        <Button 
            key={region} 
            text={region}
            onRegionSelected={() => this.regionSelected(region)} 
        />
    ))
  }

  render() {
    return (
      <RegionsWrapper>
        {this.renderButtons()}
      </RegionsWrapper>
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
const RegionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 600px;
    padding: 10px;
    margin: 0 auto;
`;
