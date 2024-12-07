import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Zoo from "./Zoo";
import MainMenu from "./MainMenu";
import Login from "./Login";
import Signup from "./Signup";
import Tutorial from "./Tutorial";

function App() {
  return( 
  <>
    <Switch>
      <Route exact path='/'>
        <MainMenu></MainMenu>
      </Route>
      <Route exact path="/zoo">
        <Zoo></Zoo>
      </Route>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/tutorial'>
        <Tutorial></Tutorial>
      </Route>
    </Switch>
  </>
)}

export default App;
