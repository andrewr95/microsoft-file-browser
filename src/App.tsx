import React from 'react';
import './App.css';
import ReactSpFx from './components/file-browser';

const App: React.FC = () => {
  return (
    <div className="">
      <header className="App-header">
           
      <ReactSpFx  userToken='' context={undefined}/>
      </header>
    </div>
  );
}

export default App;
