import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setCompletes } from "../slices/completesSlice";
import { setCash } from "../slices/cashSlice";
import { setEnclosures } from "../slices/enclosuresSlice";
import { setAnimals } from "../slices/animalSlice";
import { setUser }  from '../slices/userSlice';

function Achievements(){
    const dispatch = useDispatch()
    const achievements = useSelector(state => state.achievements)  
    const completes = useSelector(state => state.completes)
    const cash = useSelector(state => state.cash)
    const user = useSelector(state => state.user)
    useEffect(() => {
        console.log('Fetching achievements...');
        fetch('/achievements')
        .then(r => r.json())
        .then(data => dispatch(setAchievements(data)))
        fetch('/completes')
        .then(r => {
            if(r.ok){
                return r.json()
            }
        })
        .then(data => dispatch(setCompletes(data)))
        fetch('/check_session')
        .then(res => {
            if(res.ok){
            return res.json()
          }
        })
        .then(data  => {if(data){
            const enclosures = data.enclosures || [];
            
            const animals = enclosures.reduce((acc, enclosure) => {
                return acc.concat(enclosure.animals || []);
            }, []);
            dispatch(setUser(data))
            dispatch(setEnclosures(data.enclosures))
            dispatch(setAnimals(animals))
            dispatch(setCash(data.cash))
            dispatch(setCompletes(data.completes))
        }})
    }, [dispatch, cash])

    

    let achievementObjs = []

    achievements.forEach(achievement => {
        const complete = completes.find(com => com.achievement_id === achievement.id);
    
        if (complete) {
            achievementObjs.push({
                ach: achievement,
                com: true,
                claimed: complete.claimed
            })
        } else {
            achievementObjs.push({
                ach: achievement,
                com: false,
                claimed: false
            })
        }
    })

    

    let achSec= achievementObjs.map(obj => <Achievement key={obj.ach.id} ach={obj.ach} com={obj.com} claimed={obj.claimed}/>)

    return(
        <div id='achievements'>
            <h2 id='cashCounter'>${cash}</h2>
            <div id='myAchSec'>
                <h1 id="myAchHead">My Achievements:</h1>
                {user && user.achievements && user.achievements.map(ach => <h5 key={ach.id} className="achLi">{ach.name}</h5>)}
            </div>
            <Link id='mainButt2' to='/zoo'>Main Menu</Link>
            <div id='achievementsGrid'>
                {achSec}
            </div>
        </div>
    )
}

export default Achievements