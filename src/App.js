import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './navBar/NavBar';
import RollDice from './dicegame/RollDice';
import Lotto from './lotto/Lotto';
import CoinFlip from './coinFlip/CoinFlip';
import BoxList from './boxMaker/BoxList';
import Todo from './todo/TodoList';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/box" component={BoxList} />
          <Route path="/coin" component={CoinFlip} />
          <Route path="/lotto" component={Lotto} exact />
          <Route
            path="/lotto/euro"
            exact
            render={() => (
              <>
                <Lotto />
                <Lotto title="Lucky Star" maxNum={12} maxBalls={2} />
              </>
            )}
          />
          <Route path="/dice" component={RollDice} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </>
    );
  }
}

export default App;
