import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../components/Button";
import { setRegion } from "../actions/region";
const regionList = ['Japan', 'Taiwan', 'Hong Kong', 'South East Asia']

class Regions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disableRegions: 0
    };
  }

  regionSelected(region){
    const { dispatch } = this.props;
    if(this.props.region === ""){
      dispatch(setRegion(region));
      this.setState({disableRegions: 1})
    }
  }

  renderButtons(){
    return regionList.map( region => (
        <Button 
            key={region} 
            text={region}
            type="region"
            onClick={() => this.regionSelected(region)} 
            disableRegions={this.state.disableRegions}
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

function mapStateToProps(state) {
  const region = state.region;
  return {
    region
  };
}

export default connect(mapStateToProps)(Regions);

////////////CSS/////////////
const RegionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 600px;
    padding: 10px;
    margin: 0 auto;
`;
