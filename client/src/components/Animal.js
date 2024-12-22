import { useDispatch, useSelector } from "react-redux";
import { buyAnimal } from "../slices/animalSlice";
import { increaseAnimal } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";
import { completeAch } from "../slices/progressSlice";
import { useEffect } from "react";

function Animal({animal}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const cash = useSelector(state => state.cash)
    const animals = useSelector(state => state.animals)
    const enclosures = useSelector(state  => state.enclosures)
    const progress = useSelector(state => state.progress)
    useEffect(() => {
        if(animals.length > 0 && progress.wttf === false){
            if(animals[0].purchased  === true){
                fetch('/completes',{
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      code: 'wttf'
                    })
                  })
                  .then(r => r.json())
                  .then(data => dispatch(completeAch('wttf')))
            }
        }
        if(animals.length > 0 && progress.wnms === false){
            let full = true
            for(let i = 0;i < 4;i++){
                if(animals[i].purchased === false){
                    full = false
                    break
                }
            }
            if(full){
                fetch('/completes',{
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      code: 'wnms'
                    })
                  })
                  .then(r => r.json())
                  .then(data => dispatch(completeAch('wnms')))
            }
        }
        if(animals.length === 32 && progress.zoo === false){
            let allPurchased = true
            for(let animal of animals){
                if(!animal.purchased){
                    allPurchased = false
                    break
                }
            }
            for(let enclosure of enclosures){
                if(!enclosure.purchased){
                    allPurchased = false
                    break
                }
            }
            if(allPurchased === true){
                fetch('/completes',{
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      code: 'zoo'
                    })
                  })
                  .then(r => r.json())
                  .then(data => dispatch(completeAch('zoo')))
            }
        }
    },[dispatch,cash,animals,enclosures])
    function handleBuy(){
        if(animal.price <= cash){
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
        else{
            
        }
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