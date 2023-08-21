import PropTypes from 'prop-types';
import './Display.css';

const Display = ( { display }) => {
  return (
    <>
    <h2>Key: </h2>
    <div id="display">
        {display}
    </div>
    </>
  )
}

Display.propTypes = {
    display: PropTypes.string
}

export default Display