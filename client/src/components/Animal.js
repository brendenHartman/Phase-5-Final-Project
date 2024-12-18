import { useDispatch, useSelector } from "react-redux";
import { buyAnimal } from "../slices/animalSlice";
import { increaseAnimal } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";

function Animal({animal}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    function handleBuy(){
        fetch('/animals', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                animalId : animal.id,
            })
        })
        .then(r  => r.json())
        .then(data => {
            dispatch(buyAnimal(animal.id))
            dispatch(increaseAnimal(animal.enclosure_id))
            dispatch(subtractBy(animal.price))
        })
        fetch('/users', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: user.id,
                cash: animal.price,
                type: 'subtract'
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    let animalBody = (<div className="animalBody">
        <button onClick={handleBuy}>Purchase: {animal.price}</button>
    </div>)

    if(animal.purchased === true){
        animalBody = (<div className="animalBody">
            <h1>{animal.type}</h1>
        </div>)
    }

    return(
        <div id={animal.id} className="animal">
            {animalBody}
        </div>
    )
}

export default Animal