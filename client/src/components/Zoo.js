import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Enclosure from "./Enclosure";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Zoo(){
    const user = useSelector(state  => state.user)
    const enclosures = useSelector((state) => state.enclosures)
    const cash = useSelector((state) => state.cash)
    const [linksVisible, setLinksVisible] = useState(false);
        console.log(user)
        const isUserAuthenticated = user && user.cash;

        if (!isUserAuthenticated) {
            return <Redirect to="/login" />;
        }
    

    function handleMenu(event){
        setLinksVisible(!linksVisible);
    }

    return(
        <div id='ZooPageMain'>
            <h2 id='cashCounter'>${cash}</h2>
            <input type='button' onClick={handleMenu} id='MenuButt'></input>
            <Link style={{ display: linksVisible ? 'block' : 'none' }} id='achieveLink' to='/achievements'>Achievements</Link>
            <Link style={{ display: linksVisible ? 'block' : 'none' }} id='mainButt' to='/'>Main Menu</Link>
            <div id='enclosureGrid'>
                {enclosures.map((enc) => <Enclosure key={enc.id} enclosure={enc}></Enclosure>)}
            </div>
        </div>
    )
}

export default Zoo