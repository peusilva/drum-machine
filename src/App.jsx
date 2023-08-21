import React from 'react';
import './App.css'
import Display from './Components/Display';
import Pads from './Components/Pads';


 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }

    this.handleDisplay.bind(this);
  }

  handleDisplay = (key) => {
    this.setState({
      display: key
    })
  }

  render() {
  const { display } = this.state

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
      <Pads handleDisplay={this.handleDisplay}/>
      <Display display={display}/>
      </div>
    </>
  )
}
 }

export default App
