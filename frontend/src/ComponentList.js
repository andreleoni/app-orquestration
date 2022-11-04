import React from 'react';
import axios from 'axios';

export default class ComponentList extends React.Component {
  state = {
    components: []
  }

  componentDidMount() {
    axios.get(`https://gist.githubusercontent.com/andreleoni/17e3442a89c3b971ae8c6cd0d5277b8b/raw/866cde3e20e63d8f887fe515a1f67ccd7b00f406/gistfile1.txt`)
      .then(res => {
        const components = res.data;
        this.setState({ components });
      })
  }

  render() {
    return (
      <ul>
        { this.state.components.map(c => <li>{c.title}</li>)}
      </ul>
    )
  }
}
