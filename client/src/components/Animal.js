import { useSelector, useDispatch } from "react-redux";

function Animal({animal}){
    
    return(
        <div id={animal.id} className="animal">
            <h1>{animal.type}</h1>
        </div>
    )
}

export default Animal