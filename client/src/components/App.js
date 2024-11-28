import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { setUser } from '../slices/userSlice';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/check_session')
    .then(r => r.json())
    .then(data => {
      dispatch(setUser(data))
      console.log(data)
    })
    },[])

    const user = useSelector((state) => state.user.user)

  return( 
  <div>
    <p>{user.username}</p>
    <button>hi</button>
  </div>
)}

export default App;
