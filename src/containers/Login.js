import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { setUser } from "../actions/user";

class Login extends React.Component {
  login(user) {
    const { dispatch } = this.props;
    dispatch(setUser(user));
  }

  render() {
    return (
      <Log loggedIn={this.props.loggedIn}>
        <div className="inner-wrap">
          <h2>Login</h2>
          <Button text="Login as Admin" type="login" onClick={() => this.login("admin")} />
          <Button text="Login as User" type="login" onClick={() => this.login("user")} />
        </div>
      </Log>
    );
  }
}

function mapStateToProps(state) {
  const loggedIn = state.user.get("loggedIn");
  return {
    loggedIn
  };
}

Login.propTypes = {
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Login);

////////////////////////// CSS //////////////////////////
const Log = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(148, 148, 148, 0.8);
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.3s ease-in-out;
  opacity: ${props => (props.loggedIn ? 0 : 1)};
  pointer-events: ${props => (props.loggedIn ? "none" : "all")};
  .inner-wrap {
    background: #313030;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 30vh;
    width: 250px;
    box-shadow: 4px 6px 12px 3px rgba(34, 34, 34, 0.6);
    button{
      pointer-events: ${props => (props.loggedIn ? "none" : "all")};
    }
  }
  h2{margin-top: 0;}
`;
