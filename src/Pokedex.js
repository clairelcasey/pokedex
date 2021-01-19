import Pokecard from "./Pokecard";

/** Pokedex Component
 * Takes in an array of objects describing different pokemon
 * [ {id:Number, name, type, base_experience}, ...]
 * 
 * Renders a sequence of Pokecard components.
 */

function Pokedex({ pokecards, totalExp, isWinner }) {
  const pokeCardComps = pokecards.map( ({id, name, type}) => 
    <Pokecard id={id} name={name} type={type}/>);

  return (
    <div className="Pokedex">
      <p>Total Experience: {totalExp}</p>
      {pokeCardComps}
      <b>{isWinner ?  "THIS HAND WINS!" : "YOU LOST!"}</b>
    </div>
  )
}



export default Pokedex;