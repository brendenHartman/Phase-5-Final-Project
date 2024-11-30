import { useSelector, useDispatch } from "react-redux";
import Animal from "./Animal";
import { buyEnclosure } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";


function Enclosure({enclosure}){
    const dispatch = useDispatch()

    let enclosureBody = (
        <div id='enclosureBodyUnpurchased'>
            <button onClick={() => {dispatch(buyEnclosure(enclosure.type));dispatch(subtractBy(enclosure.price))}}>Purchase: ${enclosure.price}</button>
        </div>
    )

    if(enclosure.purchased === true){
        enclosureBody = (
            <div id='enclosureBodyPurchased'>
                <h1>Bought! Thanks!</h1>
            </div>
        )
    }

    return(
        <div className='enclosure' id={enclosure.id}>
            {enclosureBody}
        </div>
    )
}

export default Enclosure