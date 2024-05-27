import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../style/pokeInfo.css'

export const PokeInfoPeage = () => {
const {name} = useParams()

const [pokemon,getPokemons]=useFetch()
useEffect(()=>{
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  getPokemons(url)
},[name])
console.log(pokemon)
  return (
    
    <article>
       <div className="info_card">
             <section >
                  <header >
                    <img  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                 </header>
        <h3 >N° #  {pokemon?.id}</h3>
        <div >
          <hr />
           <h2 >{pokemon?.name}</h2>
          <hr />
        </div>

        <ul>
          <li > <span>Weight </span> <br /> <span >{pokemon?.weight}</span></li>
          <li > <span>Height </span><br /> <span >{pokemon?.height}</span></li>
        </ul>
        <div >
            <h3 >Types</h3>
            <h3 >Abilities:</h3>
        </div>    
        <div >

            <ul >
              {
                pokemon?.types.map( type => (
                  <li key={type.type.url}><span >{type.type.name}</span></li>
                ))
              }
            
            </ul>


            <ul >
              {
                pokemon?.abilities.map(ability => (
                  
                  
                  <li  key={ability.ability.url}>{ability.ability.name}</li>
                ))
              }
              
            </ul>
        </div>
          <div >
              <h3 >Stats</h3>
              <hr />
     </div>

        <ul >
            {
              pokemon?.stats.map(statInfo => (
                <li key={statInfo.stat.url}><span >{statInfo.stat.name} </span >
                </li>
              ))
              
            }
            
          </ul>

      </section>

      <div>
      <div >
              <h3 >Movements</h3>
              <hr  />
          </div>

         <ul >
            {
              pokemon?.moves.map(statInfo => (
                <li  key={statInfo.move.url}><span >{statInfo.move.name} </span ></li>
              ))
            }
          </ul>

       </div>
      </div>
  </article>



  )
}
