import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Ranking from './components/Ranking';
import RankingDummy from './components/Ranking-dummy';
import './App.css';


// class NotFound extends Component {
//   render() {
//     return <h2>コンテンツなし</h2>;
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  handleClick(){
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            {this.state.count}
          </h1>
          <button onClick={()=>{this.handleClick()}}>+</button>
        </div>

      
        <div className="App">

          <BrowserRouter>
            <ul>
              {/* カテゴリ名・IDはハードコート */}
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/all">すべてのカテゴリ</Link></li>
                <li><Link to="/dummy">ダミー</Link></li>
                <li><Link to="/category/1">リダイレクト用</Link></li>
                <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
                <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
            </ul>

            <Switch>
              <Route
                key="home"
                exact path="/"
                component={Ranking}
              />
              <Route 
                key="all"
                exact path="/all"
                component={Ranking}
              />
              <Route 
                key="dummy"
                exact path="/dummy"
                component={RankingDummy}
              />
              
              <Route
                path="/category/1"
                render={() => <Redirect to="/all" />}
              />
              <Route
                path="/category/:id"
                render={
                  ({ match }) => <Ranking categoryId={match.params.id} />
                }
              />
              <Route
                render={() => <Redirect to="/" />}
              />
            </Switch>
          </BrowserRouter>

        </div>
      </React.Fragment>
    );
  }
}

export default App;
