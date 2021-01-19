import Pokedex from './Pokedex';
import _ from "lodash";

/* Pokegame Component
* Takes in an array of objects describing different pokemon
 * [ {id:Number, name, type, base_experience}, ...]
 * Returns two Pokedex Components, once for each hand
 */

function Pokegame({ pokecards }) {
  let shuffledPokecards = _.shuffle(pokecards);
  let firstFour = shuffledPokecards.slice(0, 4);
  let lastFour = shuffledPokecards.slice(4, 8);
  let firstFourExpSum = firstFour.reduce(
    (sum, {base_experience}) => sum + base_experience, 0);
  let lastFourExpSum = lastFour.reduce(
    (sum, {base_experience}) => sum + base_experience, 0);
 
  


  return (
    <div>
      <Pokedex pokecards={firstFour} totalExp={firstFourExpSum} isWinner= {firstFourExpSum > lastFourExpSum} />
      <Pokedex pokecards={lastFour} totalExp={lastFourExpSum} isWinner={lastFourExpSum > firstFourExpSum}/>
    </div>
  )
}

Pokegame.defaultProps = {
	pokecards: [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
	]
};

export default Pokegame;