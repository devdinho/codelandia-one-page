import "./style.css";

const Form = () => {
  return (
    <div className="form-container">
      <h3>Entre em contato</h3>
      <form action="#" onSubmit={ e => e.preventDefault() }>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Telefone"/>
        <textarea placeholder="Mensagem..."></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
};

export default Form;