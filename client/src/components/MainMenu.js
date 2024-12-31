import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../slices/userSlice";

function MainMenu(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    let userSec = 
    (<div id='userSec'>
        <Link id='logInLink' className="logInLink" to="/login">Login</Link>
        <h1>/</h1>
        <Link id='signUpLink' className='signUpLink' to='/signup'>Signup</Link>
    </div>)

    let playButton = <Link className='playButt' to='/Login'>Play</Link>

    if('id' in user){
      userSec = <h1 id='' >Welcome, {user.username}!</h1>
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
            <Link id='tutLink' to='/tutorial'>Tutorial</Link>
            <div id='MainMenuDivider'></div>
            {userSec}
            <button id='signOutButton' onClick={handleSignOut}>SignOut</button>
        </div>
    )
}

export default MainMenu