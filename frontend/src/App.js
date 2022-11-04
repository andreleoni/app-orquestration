import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const COMPONENTS = axios.get(`http://localhost:3001/api/components`)

function App() {
  const [count, setCount] = useState(0);
  const [components, setComponent] = useState({ components: [] });

  var componentList = components.components.map(
    v => "<br>" + v.title
  ).join()

  COMPONENTS.then(res => { setComponent(res.data); })

  return (
    <div className="App">
      <p> Componentes  </p>

      {componentList}

      <div>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      </div>
    </div>
  );
}

export default App;
