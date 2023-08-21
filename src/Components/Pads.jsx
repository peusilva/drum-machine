import './Pads.css';
import PropTypes from 'prop-types';
import React from 'react';


class Pads extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleClick (e) {
        const audio = e.target.children[0];
        audio.play();
    }
    handleKeyDown =  (e) => {
      if (document.getElementById(e.key.toUpperCase())){
        const audio = document.getElementById(e.key.toUpperCase())
      audio.play();
      this.props.handleDisplay(audio.innerHTML)
    }}
    
    render() {
        const { handleClick, handleKeyDown } = this

  return (
    <div id="board" onKeyDown={(e) => handleKeyDown(e)}>
    <button className="drum-pad" id="heater-1" 
    onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay("Heater 1");
            }}>Q
    <audio className="clip" id="Q"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">Heater 1</audio>
    </button>
    <button className="drum-pad" id="heater-2" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>W
    <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">Heater 2</audio>
    </button>
    <button className="drum-pad" id="heater-3" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>E
    <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">Heater 3</audio>
    </button>
    <button className="drum-pad" id="heater-4" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>A
    <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">Heater 4</audio>
    </button>
    <button className="drum-pad" id="clap" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>S
    <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">Clap</audio>
    </button>
    <button className="drum-pad" id="open-hh" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>D
    <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">Open HH</audio>
    </button>
    <button className="drum-pad" id="kick-n-hat" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>Z
    <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">Kick n Hat</audio>
    </button>
    <button className="drum-pad" id="kick" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>X
    <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">Kick</audio>
    </button>
    <button className="drum-pad" id="closed-hh" onClick={(e) => {
        handleClick(e);
        this.props.handleDisplay(e.target.children[0].innerHTML)
            }}>C
    <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">Closed HH</audio>
    </button>
    </div>
  )
}}

Pads.propTypes = {
    handleDisplay: PropTypes.func
}


export default Pads