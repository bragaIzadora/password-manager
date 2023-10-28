import { useState } from 'react';
import Swal from 'sweetalert2';

type FormProps = {
  onCancel: () => void;
  onCadastro: (newService: Service) => void;
};

type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

function Form({ onCancel, onCadastro }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordValid = (passwordd: string) => {
    const minimum = password.length >= 8;
    const maximum = password.length <= 16;
    const letterNumber = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(passwordd);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(passwordd);

    return { minimum, maximum, letterNumber, special };
  };

  const passwordCheck = isPasswordValid(password);

  const isFormValid = () => {
    return serviceName !== '' && login !== ''
    && Object.values(isPasswordValid(password)).every(Boolean);
  };

  const handleCadastro = () => {
    if (isFormValid()) {
      const newService = { serviceName, login, password, url };
      onCadastro(newService);
      setServiceName('');
      setLogin('');
      setPassword('');
      setUrl('');

      Swal.fire({
        title: 'Serviço cadastrado com sucesso',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const valido = 'valid-password-check';
  const invalido = 'invalid-password-check';

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
            type={ showPassword ? 'text' : 'password' }
            name="password"
            id="password"
            required
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="show-hide-form-password"
          onClick={ () => setShowPassword(!showPassword) }
        >
          { showPassword ? 'Esconder' : 'Mostrar' }
          Senha
        </button>
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
        <button disabled={ !isFormValid() } onClick={ handleCadastro }>
          Cadastrar
        </button>
      </div>
      <div>
        <button onClick={ onCancel }>Cancelar</button>
      </div>
      <div>
        <h3 className={ passwordCheck.minimum ? valido : invalido }>
          Possuir 8 ou mais caracteres
        </h3>
        <h3 className={ passwordCheck.maximum ? valido : invalido }>
          Possuir até 16 caracteres
        </h3>
        <h3 className={ passwordCheck.letterNumber ? valido : invalido }>
          Possuir letras e números
        </h3>
        <h3 className={ passwordCheck.special ? valido : invalido }>
          Possuir algum caractere especial
        </h3>
      </div>

    </div>
  );
}

export default Form;
