import React, { Component } from 'react';
import axios from 'axios';

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  fetchParks() {
    axios
      .get('/api/parks')
      .then((response) => {
        this.setState({ parks: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchParks();
  }

  render() {
    return (
      <div className="Parks-container">
        <ul>
          {this.state.parks.map((park, key) => (
            <p key={park.id}>
              {park.name}
              <br />
              {park.opening} - {park.closing}
              <br />
              {park.address}
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Park;
