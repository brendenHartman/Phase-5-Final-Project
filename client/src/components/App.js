import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { setUser } from '../slices/userSlice';
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
import Zoo from "./Zoo";
import MainMenu from "./MainMenu";
import Login from "./Login";
import Signup from "./Signup";
import Achievements from './Achievements';
import { setCash } from "../slices/cashSlice";
import { setCompletes } from "../slices/completesSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/check_session')
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data  => {if(data){
      const enclosures = data.enclosures || [];

      const animals = enclosures.reduce((acc, enclosure) => {
        return acc.concat(enclosure.animals || []);
      }, []);
      dispatch(setUser(data))
      dispatch(setEnclosures(data.enclosures))
      dispatch(setAnimals(animals))
      dispatch(setCash(data.cash))
      dispatch(setCompletes(data.completes))
    }})
    .catch()
    },[dispatch])

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
      <Route exact path='/achievements'>
        <Achievements></Achievements>
      </Route>
    </Switch>
  </>
)}

export default App;
