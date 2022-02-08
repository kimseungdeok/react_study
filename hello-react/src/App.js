import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';

  return <div 
  style={{
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  }}
  >
    {name}
  </div>;
};

export default App;
