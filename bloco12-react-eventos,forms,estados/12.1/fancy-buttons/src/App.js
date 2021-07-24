import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  };

  handleClick1() {
    console.log('testando a bagaça 1')
    console.log(this);
  }
  handleClick2() {
    console.log('testando a bagaça 2')
  }
  handleClick3() {
    console.log('testando a bagaça 3') 
  }
  render() {
    return (
    <div> 
      <button onClick={this.handleClick1}>FirstButton</button>
      <button onClick={this.handleClick2}>SecondButton</button>
      <button onClick={this.handleClick3}>ThirdButton</button>
    </div>
    )
  }
}

export default App;
