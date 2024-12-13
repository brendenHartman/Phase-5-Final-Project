import { useSelector, useDispatch } from "react-redux";
import Animal from "./Animal";
import { buyEnclosure } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";
import { addAnimals } from "../slices/animalSlice";
import CashCollector from "./CashCollector";

function Enclosure({enclosure}){
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const user = useSelector(state => state.user)

    function onEnclosure(){
        dispatch(buyEnclosure(enclosure.type));
        dispatch(subtractBy(enclosure.price));
        fetch('/users', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: user.id,
                cash: cash
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
        fetch('/enclosures',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                enclosureId: enclosure.id
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
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

    const animals = useSelector((state) => state.animals)
    const animalSec = animals.filter((animal) => animal.type === enclosure.type)
    
    let enclosureBody = (
        <div id='enclosureBodyUnpurchased'>
            <button onClick={onEnclosure}>Purchase: ${enclosure.price}</button>
        </div>
    )

    if(enclosure.purchased === true){
        let speed  = 0
        let income =  0
        let collector = (
            <div>
                <h1>Purchase animals to start making money!</h1>
            </div>
        )
        if(enclosure.num_animals===1){
            speed = 10000
            income = 250
            collector =(<CashCollector amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===2){
            speed = 9000
            income = 300
            collector =(<CashCollector amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===3){
            speed = 8000
            income = 400
            collector =(<CashCollector amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===4){
            speed = 5000
            income = 500
            collector =(<CashCollector amount={income} interval={speed} ></CashCollector>)
        }
        enclosureBody = (
            <div id='enclosureBodyPurchased'>
                <h1>{enclosure.type.toUpperCase()}!!</h1>
                <div id='animalGrid'>
                    {animalSec.map((ani) => <Animal key={ani.id} animal={ani}></Animal>)}
                    {collector}
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