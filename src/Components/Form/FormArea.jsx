import React from 'react';
export default (props) => {
  const { cLabel, text, cArea, cols } = props;
  return (
    <>
      <label className={ cLabel }>{ text }</label>
      <textarea className={ cArea } name="mensagem" cols={ cols } rows="10"></textarea>
    </>
  );
}
