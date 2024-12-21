function Achievement({ach}){
    return(
        <div>
            <h1>{ach.name}</h1>
            <h3>{ach.description}</h3>
            <h4>Reward: {ach.reward}</h4>
        </div>
    )
}

export default Achievement