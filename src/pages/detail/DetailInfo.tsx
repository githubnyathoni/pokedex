import { typeColors } from '@/types';
import { useEffect, useState } from 'react';
import Badge from '@/components/Badge';

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    image: string;
  };
}

function DetailInfo({ pokemon }: PokemonProps) {
  const [bgColor, setBgColor] = useState(typeColors['default']);

  useEffect(() => {
    setBgColor(typeColors[pokemon.types[0]] || typeColors['default']);
  }, []);

  return (
    <div className={`rounded-t-xl min-h-72 p-6  relative ${bgColor}`}>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-white lg:text-4xl font-bold capitalize'>
            {pokemon.name}
          </p>
          <div className='flex gap-2 mt-2'>
            {pokemon.types.map((type, index) => (
              <Badge
                key={index}
                content={type}
              />
            ))}
          </div>
        </div>
        <p className='text-sm text-white font-bold text-right'>
          {`#${String(pokemon.id).padStart(3, '0')}`}
        </p>
      </div>
      <div className='w-1/2 lg:w-2/6 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 absolute'>
        <img src={pokemon.image} />
      </div>
    </div>
  );
}

export default DetailInfo;
