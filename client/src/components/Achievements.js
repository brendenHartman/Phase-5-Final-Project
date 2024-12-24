import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setCompletes } from "../slices/completesSlice";

function Achievements(){
    const dispatch = useDispatch()
    const achievements = useSelector(state => state.achievements)  
    const completes = useSelector(state => state.completes)
    const cash = useSelector(state => state.cash)

    useEffect(() => {
        fetch('/achievements')
        .then(r => r.json())
        .then(data => dispatch(setAchievements(data)))
        fetch('/completes')
        .then(r => r.json())
        .then(data => dispatch(setCompletes(data)))
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
            <Link to='/zoo'>Back</Link>
            <div id='achievementsGrid'>
                {achSec}
            </div>
        </div>
    )
}

export default Achievements