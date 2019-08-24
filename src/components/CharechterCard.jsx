import React, { Component } from "react";
import { connect } from "react-redux";

class CharechterCard extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading..</h1>;
    }
    return (
      <div className="Information">
        <p>i am card</p>
        {this.props.data.map(e => (
          <ul className="dataWrapper">
            <li key={e.name}>{e.name}</li>
            <li key={e.name}>{e.hair_color}</li>
            <li key={e.name}>{e.birth_year}</li>
          </ul>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.dataReducer.data.results
});

export default connect(mapStateToProps)(CharechterCard);
