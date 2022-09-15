import {actors} from "./data";
import Actor from "./Actor";

function Actors() {
    return (
        <div>
            {
                actors.map(actor=> <Actor key={actor.id} actor={actor} />)
            }
        </div>
    )
}

export default Actors