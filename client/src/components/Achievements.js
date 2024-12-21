import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { completeAch } from "../slices/progressSlice";

function Achievements(){
    const dispatch = useDispatch()
    const achievements = useSelector(state => state.achievements)
    const progress = useSelector(state => state.progress)
    const cash = useSelector(state => state.cash)
    const animals = useSelector(state => state.animals)
    const enclosures = useSelector(state => state.enclosures)

    function checkAch(){
        if(cash > 32000){
            dispatch(completeAch(''))
        }
        if(cash > 10000){
            dispatch(completeAch(''))
        }
        if(cash > 5000){
            dispatch(completeAch(''))
        }
        if(animals.length > 0){
            if(animals[0].purchased  === true){
                dispatch(completeAch(''))
            }
        }
        if(enclosures.length > 0){
            if(enclosures[0].purchased  === true){
                dispatch(completeAch(''))
            }
        }
        if(animals.length > 0){
            let full = true
            for(let i = 0;i < 4;i++){
                if(animals[i].purchased === false){
                    full = false
                    break
                }
            }
            if(full){
                dispatch(completeAch(''))
            }
        }
        if(enclosures.length === 8){
            let allPurchased = true
            for(let enclosure of enclosures){
                if(!enclosure.purchased){
                    allPurchased = false
                    break
                }
            }
            if(allPurchased === true){
                dispatch(completeAch(''))
            }
        }
        if(animals.length === 32){
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
                dispatch(completeAch(''))
            }
        }
    }

    useEffect(() => {
        fetch('/achievements')
        .then(r => r.json())
        .then(data => dispatch(setAchievements(data)))
    }, [dispatch])

    return(
        <div id='achievements'>
            <Link to='/zoo'>Back</Link>
            <div id='achievementsGrid'>
            {achievements.map(ach => <Achievement key={ach.id} ach={ach}/>)}
            </div>
        </div>
    )
}

export default Achievements