import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { setUser } from '../slices/userSlice';
import { setEnclosures } from "../slices/enclosuresSlice";
import { Formik } from 'formik';
import Zoo from "./Zoo";
import MainMenu from "./MainMenu";
import Login from "./Login";
import Signup from "./Signup";
import Tutorial from "./Tutorial";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/check_session')
    .then(r => r.json())
    .then(data => dispatch(setUser(data)))
    fetch('/enclosures')
    .then(r => r.json())
    .then(data => {
      dispatch(setEnclosures(data))
      console.log(data)
    })
    },[])

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
