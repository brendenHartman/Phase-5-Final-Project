import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {

  const [user,setUser] = useState({})

  useEffect(() => {
    fetch('/check_session')
    .then(r => r.json())
    .then(data => setUser(data))
    },[])

  return( 
  <div>
    <p>{user.username}</p>
  </div>
)}

export default App;
