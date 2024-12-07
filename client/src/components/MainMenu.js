import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setUser } from '../slices/userSlice';
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
function MainMenu(){
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('/check_session')
        .then(res => {
          if(res.ok){
            return res.json()
          }
        })
        .then(data  => {if(data){
          dispatch(setUser(data))
          dispatch(setEnclosures(data.enclosures))
          dispatch(setAnimals(data.animals))
        }})
        },[])
    const user = useSelector((state) => state.user)
    let userSec = 
    (<div id='userSec'>
        <Link className="logInLink" to="/login">Login</Link>
        <h1>/</h1>
        <Link className='signUpLink' to='/signup'>Signup</Link>
    </div>)

    let playButton = <Link to='/Login'>Play</Link>

    if('id' in user){
      userSec = <h1>Welcome, {user.username}!</h1>
      playButton = <Link to='/Zoo'>Play</Link>
    }


    return(
        <div id='MainMenu'>
            {playButton}
            <Link to='/tutorial'>Tutorial</Link>
            <div id='MainMenuDivider'></div>
            {userSec}
        </div>
    )
}

export default MainMenu