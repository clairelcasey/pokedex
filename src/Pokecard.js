const BASE_IMAGE_SRC = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Pokecard Component 
 * Show a single Pokemon, with their name, image, and type 
 * */

function Pokecard({ name, id, type }) {
  const image = `${BASE_IMAGE_SRC}${id}.png`;

  return (
    <div className="Pokecard">
      <h2>Name is {name}</h2>
      <p>Type is {type}</p>
      <img src={image} />
    </div>
  )
}

export default Pokecard;