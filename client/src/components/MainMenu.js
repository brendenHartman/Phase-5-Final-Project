import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../slices/userSlice";

function MainMenu(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    let userSec = 
    (<div id='userSecLog'>
        <Link id='logInLink' className="logInLink" to="/login">Login</Link>
        <h1>/</h1>
        <Link id='signUpLink' className='signUpLink' to='/signup'>Signup</Link>
    </div>)

    let playButton = <Link className='playButt' to='/Zoo'>Play</Link>

    if('id' in user){
      userSec = (
        <div id="userSecIn">
            <h1 id='welcome' >Welcome,</h1>
            <h1 id="username">{user.username}!</h1>
            <button id='signOutButton' onClick={handleSignOut}>Sign-Out</button>
        </div>)
      playButton = <Link className='playButt' to='/Zoo'>Play</Link>
    }

    function handleSignOut(){
        fetch('/signout')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            dispatch(setUser({}))
        })
    }

    return(
        <div id='MainMenu'>
            <h1 id='mainTitle'>ZooOlogy</h1>
            {playButton}
            {userSec}
        </div>
    )
}

export default MainMenu