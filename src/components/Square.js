import React from 'react';

// // Props with on click function
// const props = {
//   onClick: () => 'function',
//   value: 'X',
// };

// // destructuring value out of props
// const { value } = props;

// // Smallest component of game a single square with on click property

const style = {
  background: 'lightblue',
  border: '2px solid blue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
