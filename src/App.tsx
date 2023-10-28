import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/Form';

type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

function App() {
  const [show, setShow] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [hidePasswords, setHidePasswords] = useState(false);

  const handleCadastro = (newService: Service) => {
    setServices([...services, newService]);
    setShow(false);
  };

  const handleTogglePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  const handleRemoveSer = (index: number) => {
    const upServices = services.filter((_, i) => i !== index);
    setServices(upServices);
  };

  return (
    <div>
      <Header />
      {show ? (
        <Form onCancel={ () => setShow(false) } onCadastro={ handleCadastro } />
      ) : (
        <button onClick={ () => setShow(true) }>Cadastrar nova senha</button>
      )}

      <label>
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ handleTogglePasswords }
        />
        Esconder senhas
      </label>

      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              <a href={ service.url }>{service.serviceName}</a>
              -
              {service.login}
              -
              {service.password}
              -
              { hidePasswords ? '******' : service.password }
              <button
                data-testid="remove-btn"
                onClick={ () => handleRemoveSer(index) }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
