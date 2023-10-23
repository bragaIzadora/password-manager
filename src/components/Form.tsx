type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  return (
    <div>
      <div>
        <label htmlFor="serviceName">
          Nome do serviço
          <input type="text" id="serviceName" name="serviceName" />
        </label>
      </div>
      <div>
        <label htmlFor="login">
          Login
          <input type="text" id="login" name="login" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha
          <input type="password" name="password" id="password" />
        </label>
      </div>
      <div>
        <label htmlFor="url">
          URL
          <input type="text" id="url" name="url" />
        </label>
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
      <div>
        <button onClick={ onCancel }>Cancelar</button>
      </div>

    </div>
  );
}

export default Form;
