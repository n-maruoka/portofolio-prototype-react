import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  handleClick(){
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* <button>タグ内でonClickイベントを追加してください */}
        <button onClick={()=>{this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;
