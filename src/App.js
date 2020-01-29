import React from 'react';
import BattleDisplay from './containers/battleDisplay'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './containers/homePage'
import CharacterDisplay from './containers/characterDisplay'
import CharacterInBattleDisplay from './containers/characterInBattleDisplay';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/profile' component={CharacterDisplay} />
            <Route exact path='/battle' component={BattleDisplay} />
            <Route exact path='/battle/profile' component={CharacterInBattleDisplay} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
