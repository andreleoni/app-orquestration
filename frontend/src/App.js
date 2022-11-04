import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const COMPONENTS = axios.get(BACKEND_URL + `/api/components`)

function App() {
  const [components, setComponent] = useState({ components: [] });

  COMPONENTS.then(res => { setComponent(res.data); })

  var componentsList = components.components.map(v => v.title).join("<br><br>")
  var componentsInnerHTML = {__html: componentsList }

  return (
    <div className="App">
      <h1> Componentes do Backend </h1>

      <div dangerouslySetInnerHTML={componentsInnerHTML} />
    </div>
  )
}

export default App;
