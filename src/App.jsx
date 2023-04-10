import React, { useState } from 'react';

import './App.css'
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <h1>this is home</h1>
      <button className='btn-primary'>apply now</button>
      <button className='btn-secondary'>view Detais</button>
      <button className='btn-outline'>outline</button>
    </div>
  )
}

export default App
