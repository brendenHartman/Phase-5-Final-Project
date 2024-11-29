import { useSelector, useDispatch } from "react-redux";
import PauseMenu from "./PauseMenu";
import { Link } from "react-router-dom";
import Enclosure from "./Enclosure";

function Zoo(){

    const enclosures = useSelector((state) => state.enclosures)
    const cash = useSelector((state) => state.cash)

    return(
        <div id='ZooPageMain'>
            <h2>{cash}</h2>
            {enclosures.map((enc) => <Enclosure key={enc.id} enclosure={enc}></Enclosure>)}
        </div>
    )
}

export default Zoo