
import './App.css';
import { useState } from 'react';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [message, setMessage] = useState('')
const [error, setError] = useState('');


  const handdelSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      if (parseInt(age) >= 18) {
        setMessage(`Bienvenido ${name}, usted es mayor de edad y puede usar la pagina con normalidad`);
      } else {
        setMessage(`Bienvenido ${name}, usted es menor de edad y podra usar la pagina pero con restricciones`);
      }
      setError('');
    } else {
      setMessage('');
      setError('Por favor complete todos los campos');
    }
    if (parseInt(age) >80) {
      setMessage(`${name}, probablemente su edad sea falsa, toque en vaciar la pagina y vuelva a intentarlo `);
      setError('');
    }
  }

  const handdelReset = (e) => {
    e.preventDefault();
    setName('');
    setAge('');
    setMessage('');
    setError('');
  }

  return (
    <div className="App">
                <h1>Desafio 13</h1>
      <form  onSubmit={handdelSubmit}>
      <label htmlFor="name">Nombre</label>
      <input 
      type="text" placeholder='Ej: Pedro' value={name} onChange={(e) => setName(e.target.value)}/>
      <br />
      <label htmlFor="Age">Edad</label>
      <input type="number" placeholder='Ej: 18' value={age} onChange={(e) => setAge(e.target.value)}/>
      <div className='container-buttons'>
      <button type="submit">Enviar</button>
      <button type='reset' className='reset' onClick={handdelReset}>Vaciar</button>
      </div>
      </form>
      {message && (
        <div className={`message ${parseInt(age) < 18 ? 'message-menor' : ''}`}>
          {message}
        </div>
      )}

      {error && (
        <div className="error">{error}</div>
      )}
    </div>
  );
}

export default App;
