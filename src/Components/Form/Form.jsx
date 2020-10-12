import React from 'react';
import FormFields from './FormFields';
import FormArea from './FormArea';
import Button from '../Generics/Button';

export default (props) => {
  return (
    <section>
      <div>
        <h1>Contato</h1>
      </div>
      <section>
        <div></div>
        <form action="">
          <div className="formGroup">
            <FormFields cLabel={input} name="nome" text="Nome:" input="text" />
          </div>
          <div className="formGroup">
            <FormFields cLabel={input} name="email" text="Email:" input="email" />
          </div>
          <div className="formGroup">
            <FormArea name="mensagem" cols="30" text="mensagem" cLabel="mensagem" />
          </div>
          <div className={formGroup}>
            <Button type="submit" cButton={button} text="Enviar" />
          </div>
        </form>
      </section>
    </section>
  )
}
