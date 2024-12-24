import { useDispatch, useSelector } from "react-redux"
import { addBy } from "../slices/cashSlice"
import { userCashAdd } from "../slices/userSlice"
import { claimCom } from "../slices/completesSlice"

function Achievement({ach, com, claimed}){
    const user = useSelector(state => state.user)
    const completes = useSelector(state => state.completes)
    const dispatch = useDispatch()
    let botSec = <h5>Incomplete</h5>
    const comp = completes.find(com => com.achievement_id === ach.id)
    function claimAch(){
        fetch('/completes', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                com: comp.id
              })
        })
        .then()
        .then(data => dispatch(claimCom(ach.id)))
        fetch('/users', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                userId: user.id,
                cash: ach.reward,
                type: 'add'
            })
        })
        .then(r => r.json())
        .then(data => {
            dispatch(addBy(ach.reward))
            dispatch(userCashAdd(ach.reward))
        })
    }
    if(com && !claimed){
        botSec = <button onClick={claimAch}>Claim</button>
    }
    else if(com && claimed){
        botSec = <h5>Claimed</h5>
    }

    return(
        <div>
            <h1>{ach.name}</h1>
            <h3>{ach.description}</h3>
            <h4>Reward: {ach.reward}</h4>
            {botSec}
        </div>
    )
}

export default Achievement