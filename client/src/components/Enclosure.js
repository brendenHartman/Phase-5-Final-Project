import { useSelector, useDispatch } from "react-redux";
import Animal from "./Animal";
import { buyEnclosure } from "../slices/enclosuresSlice";
import { subtractBy } from "../slices/cashSlice";
import { addAnimals } from "../slices/animalSlice";
import { completeAch } from "../slices/progressSlice";
import CashCollector from "./CashCollector";
import { useEffect } from "react";
import { userCashSubtract } from "../slices/userSlice";
import { useState } from "react";

function Enclosure({enclosure}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const cash = useSelector(state => state.cash)
    const enclosures = useSelector(state => state.enclosures)
    const progress = useSelector(state => state.progress)
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if(enclosures.length > 0 && progress.ss === false){
            if(enclosures[0].purchased  === true){
                fetch('/completes',{
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      code: 'ss'
                    })
                  })
                  .then(r => r.json())
                  .then(data => dispatch(completeAch('ss')))
            }
        }
        if(enclosures.length === 8 && progress.fe === false){
            let allPurchased = true
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
                      code: 'fe'
                    })
                  })
                  .then(r => r.json())
                  .then(data => dispatch(completeAch('fe')))
            }
        }
        if(cash >= 32000 && progress.cs === false){
              fetch('/completes',{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  code: 'cs'
                })
              })
              .then(r => r.json())
              .then(data => dispatch(completeAch('cs')))
            }
            if(cash >= 10000 && progress.ch === false){
              fetch('/completes',{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  code: 'ch'
                })
              })
              .then(r => r.json())
              .then(data => dispatch(completeAch('ch')))
            }
            if(cash >= 5000 && progress.cc === false){
              fetch('/completes',{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  code: 'cc'
                })
              })
              .then(r => r.json())
              .then(data => dispatch(completeAch('cc')))
            }
    },[dispatch, enclosures, cash])
    
    
    function onEnclosure(){
        if(enclosure.price <= cash){
            dispatch(buyEnclosure(enclosure.type));
            dispatch(subtractBy(enclosure.price));
            dispatch(userCashSubtract(enclosure.price))
            fetch('/users', {
               method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: user.id,
                    cash: enclosure.price,
                    type: 'subtract'
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
        else{
            setErrorMessage('not enough money!!')
            setTimeout(() =>  {
              setErrorMessage('');
            }, 3000)
        }
    }

    const animals = useSelector((state) => state.animals)
    const animalSec = animals.filter((animal) => animal.type === enclosure.type)
    
    let enclosureBody = (
        <div id='enclosureBodyUnpurchased'>
            <h1 className="enclosureTitle">{enclosure.type.toUpperCase()} ENCLOSURE</h1>
            <button className='enclosurePurButt' onClick={onEnclosure}>Purchase: ${enclosure.price}</button>
        </div>
    )
    let speed = 0
    let income = 0
    if(enclosure.purchased === true){
        let collector = (
            <div>
                <h1>Purchase animals to start making money!</h1>
            </div>
        )
        if(enclosure.num_animals===1){
            speed = 10000
            income = 20 * enclosure.id
            collector =(<CashCollector enclosure={enclosure} amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===2){
            speed = 9000
            income = 50 * enclosure.id
            collector =(<CashCollector enclosure={enclosure} amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===3){
            speed = 8000
            income = 75 * enclosure.id
            collector =(<CashCollector enclosure={enclosure} amount={income} interval={speed} ></CashCollector>)
        }
        if(enclosure.num_animals===4){
            speed = 5000
            income = 150 * enclosure.id
            collector =(<CashCollector enclosure={enclosure} amount={income} interval={speed} ></CashCollector>)
        }
        enclosureBody = (
            <div id='enclosureBodyPurchased'>
                <h1 className="enclosureTitle">{enclosure.type.toUpperCase()} ENCLOSURE</h1>
                <div className='animalGrid' id='animalGrid'>
                    {animalSec.map((ani) => <Animal key={ani.id} animal={ani}></Animal>)}
                </div>
                <p className="incomeDesc">lvl: {enclosure.num_animals} | income: {income}/{speed / 1000}secs</p>
                {collector}
            </div>
        )
    }

    return(
        <div className='enclosure' id={enclosure.id}>
            {errorMessage && <div id='errorMsg2'>{errorMessage}</div>}
            {enclosureBody}
        </div>
    )
}

export default Enclosure