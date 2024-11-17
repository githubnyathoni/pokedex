import { GET_POKEMON } from '@/api/services/pokemon';
import { useEffect, useState } from 'react';
import Badge from './Badge';
import { PokemonType, typeColors } from '@/types';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

function Card({ pokemon }: CardProps) {
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
    image: '',
    types: [],
  });
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState(typeColors['default']);
  const navigate = useNavigate();

  const RETRIEVE_POKEMON = async () => {
    setLoading(true);

    const result = await GET_POKEMON(pokemon.url);

    setPokemonInfo({
      id: result.id,
      image: result.sprites.other.home.front_default,
      types: result.types.map((type: PokemonType) => {
        return type.type.name;
      }),
    });

    setBgColor(typeColors[result.types[0].type.name] || typeColors['default']);
    setLoading(false);
  };

  useEffect(() => {
    RETRIEVE_POKEMON();
  }, []);

  const handlePokemonClick = () => {
    navigate(`pokemon/${pokemonInfo.id}`);
  };

  return (
    <div
      onClick={() => handlePokemonClick()}
      className={`rounded-xl ${bgColor} w-36 md:w-40 min-h-36 p-4 relative shadow-md hover:shadow-xl cursor-pointer`}
    >
      {loading ? (
        <img src='/pokeball.gif' />
      ) : (
        <>
          <p className='text-xs text-right opacity-15'>
            {`#${String(pokemonInfo.id).padStart(3, '0')}`}
          </p>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <span className='text-white text-[18px] capitalize leading-3 font-semibold'>
                {pokemon.name}
              </span>
              <div className='flex flex-col gap-1 mt-4'>
                {pokemonInfo.types.map((type, index) => (
                  <Badge
                    key={index}
                    content={type}
                  />
                ))}
              </div>
            </div>
            <img
              className='absolute bottom-3 right-0 p-2'
              src={pokemonInfo.image}
              width={80}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
