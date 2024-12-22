import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setCompletes } from "../slices/completesSlice";
import Complete from "./Complete";

function Achievements(){
    const dispatch = useDispatch()
    const achievements = useSelector(state => state.achievements)  
    const progress = useSelector(state => state.progress)
    const completes = useSelector(state => state.completes)

    useEffect(() => {
        fetch('/achievements')
        .then(r => r.json())
        .then(data => dispatch(setAchievements(data)))
        fetch('/completes')
        .then(r => r.json())
        .then(data => dispatch(setCompletes(data)))
    }, [dispatch])

    return(
        <div id='achievements'>
            <Link to='/zoo'>Back</Link>
            <div id='achievementsGrid'>
                {achievements.map(ach => <Achievement key={ach.id} ach={ach}/>)}
            </div>
            <div id='achDivider'></div>
            <div id='completesGrid'>
                {completes.map(com => <Complete key={com.id} com={com}/>)}
            </div>
        </div>
    )
}

export default Achievements