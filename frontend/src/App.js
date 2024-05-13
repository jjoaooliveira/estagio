import './App.css';
import NavBar from './components/navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [body, setBody] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:7777/teste')
      .then((response) => {
        // console.log(response)
        const data = response.data.dados
        console.log(data)
        setBody(data)
      })
      .catch((e) => {

      })
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Carros Populares</h1>

      { body.length > 0 ? (
        <ol>
          {
            body.map(element => {
              return (
                <li key={element.id}>
                  {element.modelo} + {element.cor}
                </li>
              )
            })
          }
        </ol>
      ) : (
        <p>Hello World! </p>
      )
      }
    </div>
  );
}

export default App;
