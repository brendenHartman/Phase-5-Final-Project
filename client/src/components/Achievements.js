import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setCompletes } from "../slices/completesSlice";

function Achievements(){
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('/achievements')
        .then(r => r.json())
        .then(data => dispatch(setAchievements(data)))
        fetch('/completes')
        .then(r => r.json())
        .then(data => dispatch(setCompletes(data)))
    }, [dispatch])

    const achievements = useSelector(state => state.achievements)  
    const completes = useSelector(state => state.completes)

    let achievementObjs = []

    for(let ach in achievements){
        for(let com in completes){
            if(com.achieivement_id === ach.id){
                if(com.claimed === false){
                    achievementObjs.append({
                        ach: ach,
                        com: true,
                        claimed: false
                    })
                }
                else{
                    achievementObjs.append({
                        ach: ach,
                        com: true,
                        claimed: true
                    })
                }
            }
        }
    }

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