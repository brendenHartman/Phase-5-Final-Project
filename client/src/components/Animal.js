import { useDispatch } from "react-redux";
import { buyAnimal } from "../slices/animalSlice";

function Animal({animal}){
    const dipsatch = useDispatch()

    function handleBuy(){
        fetch('/animals', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: {
                animalId : animal.id,
            }
        })
        .then(r  => r.json())
        .then(data => {
            dipsatch(buyAnimal(animal.id))
        })
    }

    let animalBody = (<div className="animalBody">
        <button onClick={handleBuy}>Purchase</button>
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