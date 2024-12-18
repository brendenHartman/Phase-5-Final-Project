import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../slices/userSlice";

function MainMenu(){
    const dispatch = useDispatch()
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
            {playButton}
            <Link to='/tutorial'>Tutorial</Link>
            <div id='MainMenuDivider'></div>
            {userSec}
            <button id='signOutButton' onClick={handleSignOut}>SignOut</button>
        </div>
    )
}

export default MainMenu