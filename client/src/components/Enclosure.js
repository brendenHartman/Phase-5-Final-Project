import { useSelector, useDispatch } from "react-redux";
import Animal from "./Animal";

function Enclosure({enclosure}){
    return(
        <div className='enclosure' id={enclosure.id}>
            <h1>{enclosure.type}</h1>
        </div>
    )
}

export default Enclosure