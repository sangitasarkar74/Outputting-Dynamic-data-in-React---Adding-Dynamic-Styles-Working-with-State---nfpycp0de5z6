import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  //code here
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    // return `Hello my name is ${prop}____ and I study at Newton School`
    setName(event.target.value);
    // p.target.value;
    console.log(event.target.value)
  }

  const handleClickBtn = () => {
    setData(name);
  }

  return (
    <div id="main">
      <input id='input' type="text" name="firstName" onChange={handleChange} value={name}></input>
      <button id='button' onClick={handleClickBtn} value={name}>Click</button>
      <p id='text'> Hello my name is {data}____ and I study at Newton School</p>
    </div >
  )
}


export default App;
