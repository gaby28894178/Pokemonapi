import '../../style/PokeCard.css'
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import  '../../style/PokeCard.css'

const PokeCard = ({ poke }) => {
  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    getPokemon(poke.url);
  }, [poke.url]);

  const navigate = useNavigate();

  const handlerNavDetail = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <article  onClick={handlerNavDetail}>
      <header >
        <br />
        {
          pokemon?.sprites?.other['official-artwork']?.front_default && (
            <img className='poke-img' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          )}
      </header>
        
      <section className='sec-data'>
        <h3>{pokemon?.name}</h3>
        <ul>
          {pokemon?.types.map(typeInfo => (
            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
        <ul className='ul-info'>
          {pokemon?.stats.map(statInfo => (
            <li className='li-info' key={statInfo.stat.url}>
              <span>{statInfo.stat.name}</span>
              <span>{statInfo.base_stat}</span>
            </li>
          ))}
      
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
