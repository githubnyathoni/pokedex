import { GET_POKEMON } from '@/api/services/pokemon';
import Loading from '@/components/Loading';
import { PokemonType } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import DetailStats from './DetailStats';

interface AbilitiesItem {
  ability: {
    name: string;
  };
}

interface MovesItem {
  move: {
    name: string;
  };
}

interface StatsItem {
  base_stat: number;
}

function DetailPage() {
  const [loading, setLoading] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
    name: '',
    types: [],
    image: '',
  });
  const [pokemonStats, setPokemonStats] = useState({
    about: {
      height: 0,
      weight: 0,
      abilities: [],
    },
    base_stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defense: 0,
      speed: 0,
      total: 0,
    },
    moves: [],
  });
  const { id } = useParams();

  const RETRIEVE_POKEMON = async () => {
    setLoading(true);

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await GET_POKEMON(url);

    setPokemonInfo({
      id: result.id,
      name: result.name,
      types: result.types.map((type: PokemonType) => {
        return type.type.name;
      }),
      image: result.sprites.other.home.front_default,
    });
    setPokemonStats({
      about: {
        height: result.height,
        weight: result.weight,
        abilities: result.abilities.map((item: AbilitiesItem) => {
          return item.ability.name;
        }),
      },
      base_stats: {
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        special_attack: result.stats[3].base_stat,
        special_defense: result.stats[4].base_stat,
        speed: result.stats[5].base_stat,
        total: result.stats.reduce(
          (sum: number, item: StatsItem) => sum + item.base_stat,
          0
        ),
      },
      moves: result.moves.map((item: MovesItem) => {
        return item.move.name;
      }),
    });
    setLoading(false);
  };

  useEffect(() => {
    RETRIEVE_POKEMON();
  }, []);

  return (
    <div className='flex justify-center relative'>
      {loading ? (
        <Loading />
      ) : (
        <div className='rounded-xl w-full md:w-3/4 shadow-lg mt-16'>
          <DetailInfo pokemon={pokemonInfo} />
          <DetailStats stats={pokemonStats} />
        </div>
      )}
    </div>
  );
}

export default DetailPage;
