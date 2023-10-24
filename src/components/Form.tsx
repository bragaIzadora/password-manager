import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const isPasswordValid = (passwordd: string) => {
    const minimun = password.length >= 8;
    const maximum = password.length <= 16;
    const letterNumber = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(passwordd);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(passwordd);

    return minimun && maximum && letterNumber && special;
  };

  const isFormValid = () => {
    return serviceName !== '' && login !== '' && isPasswordValid(password);
  };
  return (
    <div>
      <div>
        <label htmlFor="serviceName">
          Nome do serviço
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            required
            value={ serviceName }
            onChange={ (e) => setServiceName(e.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            name="login"
            required
            value={ login }
            onChange={ (e) => setLogin(e.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            required
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="url">
          URL
          <input
            type="text"
            id="url"
            name="url"
            value={ url }
            onChange={ (e) => setUrl(e.target.value) }
          />
        </label>
      </div>
      <div>
        <button disabled={ !isFormValid() } onClick={ onCancel }>Cadastrar</button>
      </div>
      <div>
        <button onClick={ onCancel }>Cancelar</button>
      </div>

    </div>
  );
}

export default Form;
