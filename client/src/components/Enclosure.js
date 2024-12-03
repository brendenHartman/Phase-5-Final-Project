import { useSelector, useDispatch } from "react-redux";
import Animal from "./Animal";
import { buyEnclosure } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";
import { addAnimals } from "../slices/animalSlice";

function Enclosure({enclosure}){
    const dispatch = useDispatch()
    console.log(enclosure.user_id,enclosure.animal_price,enclosure.type,enclosure.id)
    function onEnclosure(){
        dispatch(buyEnclosure(enclosure.type));
        dispatch(subtractBy(enclosure.price));
        fetch('/animals',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: enclosure.type,
                userId: enclosure.user_id,
                enclosureId: enclosure.id,
                price: enclosure.animal_price
            })
        })
        .then(r => r.json())
        .then(data => dispatch(addAnimals(data)))
    }

    let enclosureBody = (
        <div id='enclosureBodyUnpurchased'>
            <button onClick={onEnclosure}>Purchase: ${enclosure.price}</button>
        </div>
    )

    if(enclosure.purchased === true){
        enclosureBody = (
            <div id='enclosureBodyPurchased'>
                <h1>{enclosure.type.toUpperCase()}!!</h1>
                <div id='animalGrid'>
                    <div className="animalHolder">
                        
                    </div>
                    <div className="animalHolder">
                        
                    </div>
                    <div className="animalHolder">
                    
                    </div>
                    <div className="animalHolder">
                    
                    </div>
                </div>
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