import cat from './cat.jpg'
import './App.css';
import Image from './Image.js'

function App() {
  return (
    <div className="App">
      <Image source={cat} alternativeText='Cute cat staring '/>
    </div>
  );
}

export default App;
