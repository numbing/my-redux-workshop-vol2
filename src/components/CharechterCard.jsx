import React, { Component } from "react";
import { connect } from "react-redux";

class CharechterCard extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading..</h1>;
    }
    return (
      <div>
        <p>i am card</p>
        <ul>
          {this.props.data.map(e => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.dataReducer.data.results
});

export default connect(mapStateToProps)(CharechterCard);
