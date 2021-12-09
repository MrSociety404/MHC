
import "./Hikings.scss";

//Import cards
import Card from './Card.jsx';

const Hikings=()=>{
            
     
    return(
        <div className="cards">
            {/* {Card.map(card=>{
                return(
                    <div>{Card.card}</div>
                )
            })} */}
       <Card />
       </div>
    )
}








export default Hikings;