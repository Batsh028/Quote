import React from 'react';
import './App.css';
import DisplayQuote from './Components/DisplayQuote';
import axios from 'axios';

const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Yolo: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          Yolo: data[0],
        });
      });
  }
  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.Yolo} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;