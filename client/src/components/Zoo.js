import { useSelector, useDispatch } from "react-redux";
import PauseMenu from "./PauseMenu";
import { Link } from "react-router-dom";
import Enclosure from "./Enclosure";
import { addBy } from "../slices/cashSlice";

function Zoo(){

    const dispatch = useDispatch()
    const enclosures = useSelector((state) => state.enclosures)
    const cash = useSelector((state) => state.cash)
    
    return(
        <div id='ZooPageMain'>
            <h2 id='cashCounter'>{cash}</h2>
            <button id='TEMPADD' onClick={() => dispatch(addBy(1000))}>+</button>
            <div id='enclosureGrid'>
                {enclosures.map((enc) => <Enclosure key={enc.id} enclosure={enc}></Enclosure>)}
            </div>
        </div>
    )
}

export default Zoo