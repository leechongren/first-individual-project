import React from "react";
import BattleDisplay from "./containers/BattleDisplay";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CharacterDisplay from "./containers/CharacterDisplay";
import CharacterInBattleDisplay from "./containers/CharacterInBattleDisplay";
import RegisterPage from "./containers/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={CharacterDisplay} />
            <Route exact path="/battle" component={BattleDisplay} />
            <Route
              exact
              path="/battle/profile"
              component={CharacterInBattleDisplay}
            />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
