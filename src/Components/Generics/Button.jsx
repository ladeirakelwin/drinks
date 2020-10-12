import React from 'react';
export default (props) => {
  return (
  <button className={props.cButton} type={props.type}>{props.text}</button>
  );
}
