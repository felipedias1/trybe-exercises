import logo from './logo.svg';
import './App.css';

const arr = ['Felipe','Ferreira','Dias']

const Task = (value) => {
  return (
    arr.map((item) => <li key={value}>{item}</li>)
  );
}

function App() {
  return (
    <div className="App">
      {Task('Felipe')}
    </div>
  );
}

export default App;
