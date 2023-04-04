import './App.css';
import React, { useState } from 'react';

function App() {
  const[result,setResult] = useState("");

  async function fetchApi(){
    const url = `${process.env.REACT_APP_PORT_URL}/test`;
    console.log(url);
    const response =  await fetch(url)
   
    const json = await response.json();
    setResult(json);
  }
  return (
    <div className="App">
       <button onClick={fetchApi}>Fetch info from Api </button>
       <div>result: {result}</div>
    </div>
  );
}

export default App;
