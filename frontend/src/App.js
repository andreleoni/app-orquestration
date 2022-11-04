import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const COMPONENTS = axios.get(`http://localhost:3001/api/components`)

function App() {
  const [components, setComponent] = useState({ components: [] });

  COMPONENTS.then(res => { setComponent(res.data); })

  var componentsList = components.components.map(v => v.title).join("<br><br>")
  var componentsInnerHTML = {__html: componentsList }

  return (
    <div className="App">
      <p> Componentes  </p>
      <div dangerouslySetInnerHTML={componentsInnerHTML} />
    </div>
  )
}

export default App;
