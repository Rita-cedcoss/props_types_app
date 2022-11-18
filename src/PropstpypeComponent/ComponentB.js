import React from 'react'
import PropTypes from 'prop-types';
const ComponentB = (props) => {
  return (
    <div>
        <h1>{props.name}</h1> 
    </div>
  )
}
ComponentB.propTypes = {
    name: PropTypes.string,
    number:PropTypes.number,
    bool:PropTypes.bool,
    func:PropTypes.func,
    symbol:PropTypes.symbol,
    data:PropTypes.func,
  };
export default ComponentB