import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Achievement from "./Achievement";
import { setAchievements } from "../slices/achievementsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Achievements(){
    const achievements = useSelector(state => state.achievements)
    const dispatch = useDispatch()

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