import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Player from "../components/Player";
import { selectPlayers } from "../selectors/players";
import { voteCast } from "../actions/voting";

class Players extends React.Component {
  constructor(props) {
    super(props);
  }

  playerSelected(player) {
    if(this.props.votesCast < 3){
      const { dispatch } = this.props;
      dispatch(voteCast(player));
    }
  }

  regionText(region) {
    switch (region) {
      case "jp":
        return "Japan";
      case "tw":
        return "Taiwan";
      case "hk":
        return "Hong Kong";
      case "sg":
        return "South East Asia";
      case "my":
        return "South East Asia";
      case "ph":
        return "South East Asia";
      case "in":
        return "South East Asia";
      case "th":
        return "South East Asia";
      case "kh":
        return "South East Asia";
      case "mm":
        return "South East Asia";
      case "bn":
        return "South East Asia";
      case "tp":
        return "South East Asia";
      case "la":
        return "South East Asia";
      case "kh":
        return "South East Asia";
      default:
        return "";
    }
  }

  renderPlayers() {
    return this.props.players
      .filter(p => this.regionText(p.country) == this.props.region)
      .map(p => (
        <Player
          name={p.nickname}
          teams={p.teams}
          id={p.participantId}
          avatar={p.avatarUrl}
          message={p.message}
          country={p.country}
          likes={p.likes}
          key={p.nickname}
          onClick={() => this.playerSelected(p)}
          votesCast={this.props.votesCast}
        />
      ));
  }

  render() {
    return <PlayersWrapper>{this.renderPlayers()}</PlayersWrapper>;
  }
}

function mapStateToProps(state) {
  const players = selectPlayers(state);
  const region = state.region;
  const votesCast = state.voting.get('votesCast');
  const votingClosed = state.voting.get('votingClosed');
  return {
    players,
    region,
    votesCast,
    votingClosed
  };
}

export default connect(mapStateToProps)(Players);

////////////CSS/////////////
const PlayersWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
`;
