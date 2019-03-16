import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Login from "./Login";
import Button from "../components/Button";
import PropTypes from "prop-types";
import Regions from "./Regions";
import Players from "./Players";
import { logoutUser } from "../actions/user";
import { closeVoting } from "../actions/voting";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeVoting: 'Close Voting'
    }
  }

  logout() {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  closeVoting() {
    this.setState({closeVoting: 'Voting Closed'})
    const { dispatch } = this.props;
    dispatch(closeVoting());
  }

  render() {
    const { user, votingClosed } = this.props;
    return (
      <Wrapper>
        <Login />
        <Button type="logout" text="logout" onClick={() => this.logout("user")} />
        {user === "admin" ? (
          <div className="inner-wrap">
            <h1>Welcome Admin</h1>
            <Button type="closeVoting" text={this.state.closeVoting} onClick={() => this.closeVoting()} />
          </div>
        ) : votingClosed ? (
            <div className="inner-wrap">
              <h1>Voting is now closed</h1>
              <p>You can view the results of each region below.</p>
            </div>
          ) : (
            <div className="inner-wrap">
              <h1>Vote for players to represent your region</h1>
              <p>Select your region to browse players.</p>
              <p>NOTE: you may only vote for one region.</p>
            </div>
          )
        }
        <Regions />
        <Players />
        {votingClosed || user === "admin"  ? null : <h3>You have {3 - this.props.votesCast}/3 remaining votes</h3>}
      </Wrapper>
    );
  }
}

Panel.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func,
  votingClosed: PropTypes.bool,
  votesCast: PropTypes.number,
};

function mapStateToProps(state) {
  const players = state.players.get("list");
  const user = state.user.get("name");
  const votesCast = state.voting.get('votesCast');
  const votingClosed = state.voting.get('votingClosed');
  return {
    players,
    user,
    votesCast,
    votingClosed
  };
}

export default connect(mapStateToProps)(Panel);

////////////CSS/////////////
const Wrapper = styled.div`
  position: relative;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans");
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  background: rgb(35, 41, 47);
  color: #f2f2f2;
`;
