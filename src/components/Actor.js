

function Actor(props) {
    let {actor} = props
    return (
        <div >
            <h1>{actor.id}</h1>
            <h2>{actor.name} — {actor.status}</h2>
            <p>{actor.species} — {actor.gender}</p>
            <img src={actor.image} alt={actor.name}/>
        </div>
    )
}

export default Actor