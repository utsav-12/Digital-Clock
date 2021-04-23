import logo from './logo.svg';
import './App.css';
import React  , {useState} from 'react';

const App = () => {
  const newTime = new Date().toLocaleTimeString();

  const [cTime , setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
  };

  setInterwal(UpdateTime , 1000);

  return (
    <>
    <h1>{cTime}</h1>
    </>
  );
}

export default App;
