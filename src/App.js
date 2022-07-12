//import Display from './components/display';
//import Form from './components/form';
import BoxDisplay from './components/box_display';
import BoxForm from './components/box_form';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [boxColorArr, setBoxColorArr] = useState([]);

  const [boxPropertyArr, setBoxPropertyArr] = useState([])

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxForm boxPropertyArr = {boxPropertyArr} setBoxPropertyArr = {setBoxPropertyArr} />
      <BoxDisplay boxPropertyArr = { boxPropertyArr } />
    </div>
  );
}

export default App;
