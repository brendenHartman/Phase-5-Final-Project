import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Enclosure from "./Enclosure";

function Zoo(){

    const enclosures = useSelector((state) => state.enclosures)
    const cash = useSelector((state) => state.cash)
    
    return(
        <div id='ZooPageMain'>
            <h2 id='cashCounter'>${cash}</h2>
            <div id='MenuButt'>
                <Link id='achieveLink' to='/achievements'>Achievements</Link>
                <Link id='mainButt' to='/'>Main Menu</Link>
            </div>
            <div id='enclosureGrid'>
                {enclosures.map((enc) => <Enclosure key={enc.id} enclosure={enc}></Enclosure>)}
            </div>
        </div>
    )
}

export default Zoo