import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function MainMenu(){

    const user = useSelector((state) => state.user)
    let userSec = 
    (<div id='userSec'>
        <Link className="logInLink" to="/login">Login</Link>
        <h1>/</h1>
        <Link className='signUpLink' to='/signup'>Signup</Link>
    </div>)

    let playButton = <Link to='/Login'>Play</Link>

    if(user != {}){
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