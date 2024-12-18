import { useSelector, useDispatch } from "react-redux";

function Achievements(){
    const user = useSelector(state => state.user)
    const enclosures = useSelector(state => state.enclosures)
    const cash = useSelector(state => state.cash)
    const animals = useSelector(state => state.animals)

    return(
        <div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Achievements