import React, { Component } from 'react';
import axios from 'axios';

class Park extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [],
      test: "Yoyo"
    }
  }

  componentDidMount() {
    axios.get('/api/parks')
    .then(response => {
      this.setState.parks = response.data;
    })
    .catch(error => console.log(error))
  }
  
  render() {
    const parks = this.state.parks.map((park, key) =>
      <li key={park.id}>{park.name}</li>
    )

    return (
      <div className="Parks-container">
        <h1>Parks</h1>
        <h1>{parks}</h1>
        <h2>{this.state.test}</h2>
      </div>
    )
  }
}
 
export default Park;