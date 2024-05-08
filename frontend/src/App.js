import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [ body, setBody ] = useState('')

  useEffect( () => {
    axios
        .get('http://localhost:7777/teste')
        .then((response) => {
          // console.log(response)
          const data = response.data
          // console.log(data)
          setBody(data['dados'])
        })
        .catch((e) => {

        })
  }, [])

  return (
    <div>
      {body}
    </div>
  );
}

export default App;
