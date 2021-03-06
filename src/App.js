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

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function AccordionOpen(props) {
  return (
    <button onClick={props.onClick}>
      Open
    </button>
  );
}

function AccordionClose(props) {
  return (
    <button onClick={props.onClick}>
      Close
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleAccordionOpen = this.handleAccordionOpen.bind(this);
    this.handleAccordionClose = this.handleAccordionClose.bind(this);
    this.state = {
      count: 0, 
      isLoggedIn: false,
      isAccordionOpen: false,
    };
  }
  
  /* counter */
  handleClick(){
    console.log('handleClick');
    this.setState({count: this.state.count + 1});
  }
  
  /* Login btn */
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  /* Accordion btn */
  handleAccordionOpen() {
    this.setState({isAccordionOpen: true});
  }

  handleAccordionClose() {
    this.setState({isAccordionOpen: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let buttonLogInOut;
    if (isLoggedIn) {
      buttonLogInOut = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      buttonLogInOut = <LoginButton onClick={this.handleLoginClick} />;
    }

    const isAccordionOpen = this.state.isAccordionOpen;
    let accBtn, acc;
    if (isAccordionOpen) {
      accBtn = <AccordionClose onClick={this.handleAccordionClose} />;
      acc = <details open><summary>HTMLって何の略？</summary><p>「Hyper Text Markup Language」の略です。</p></details>;
    } else {
      // accBtn = <AccordionOpen onClick={this.handleAccordionOpen} />;
      accBtn = <AccordionOpen onClick={this.handleAccordionOpen} />;
      acc = <details><summary>HTMLって何の略？</summary><p>最初は閉じていますよ</p></details>;
    }   

    return (
      <React.Fragment>
        <div>
          <h1>
            {this.state.count}
          </h1>
          <button onClick={()=>{this.handleClick()}}>+</button>
        </div>

        <div>
          <p></p>
          {buttonLogInOut}
          {this.state.isLoggIn && <h2>test</h2> }          
        </div>

        <div>
          <p></p>
          <div>{accBtn}</div>
          <p></p>
          <div>{acc}</div>
          <p></p>
          <div>{acc}</div>
          <p></p>
          <div>{acc}</div>
          <p></p>
          <div>{acc}</div>
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
