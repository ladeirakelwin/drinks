import React from 'react';
export default (props) => {
  <>
    <label className={props.cLabel}>{props.text}</label>
    <input className={props.cInput} type={props.input} name={props.name}  />
  </>
}
