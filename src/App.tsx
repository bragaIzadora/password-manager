import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/Form';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      {show ? (
        <Form onCancel={ () => setShow(false) } />
      ) : (
        <button onClick={ () => setShow(true) }>Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default App;
