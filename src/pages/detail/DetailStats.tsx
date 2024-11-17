import { useState } from 'react';
import { divideByTen } from '@/utils/divideByTen';
import DetailBaseStat from './DetailBaseStat';

interface StatsProps {
  stats: {
    about: {
      height: number;
      weight: number;
      abilities: string[];
    };
    base_stats: {
      hp: number;
      attack: number;
      defense: number;
      special_attack: number;
      special_defense: number;
      speed: number;
      total: number;
    };
    moves: string[];
  };
}

function DetailStats({ stats }: StatsProps) {
  const [activeMenu, setActiveMenu] = useState('About');

  return (
    <div className='rounded-xl p-6'>
      <div className='flex justify-around'>
        <span
          className={`${
            activeMenu === 'About'
              ? 'opacity-100 border-b-blue-500 border-b-2'
              : 'opacity-20 hover:opacity-100'
          } cursor-pointer duration-700 transition-all`}
          onClick={() => setActiveMenu('About')}
        >
          About
        </span>
        <span
          className={`${
            activeMenu === 'Base Stats'
              ? 'opacity-100 border-b-blue-500 border-b-2'
              : 'opacity-20 hover:opacity-100'
          } cursor-pointer duration-700 transition-all`}
          onClick={() => setActiveMenu('Base Stats')}
        >
          Base Stats
        </span>
        <span
          className={`${
            activeMenu === 'Moves'
              ? 'opacity-100 border-b-blue-500 border-b-2'
              : 'opacity-20 hover:opacity-100'
          } cursor-pointer duration-700 transition-all`}
          onClick={() => setActiveMenu('Moves')}
        >
          Moves
        </span>
      </div>
      <div className='mt-4'>
        <div className={`${activeMenu === 'About' ? 'flex' : 'hidden'}`}>
          <div className='flex flex-col basis-1/4'>
            <span className='opacity-40'>Height</span>
            <span className='opacity-40'>Weight</span>
            <span className='opacity-40'>Abilities</span>
          </div>
          <div className='flex flex-col basis-3/4 text-right'>
            <span>{divideByTen(stats.about.height)} cm</span>
            <span>{divideByTen(stats.about.weight)} kg</span>
            <span className='capitalize'>
              {stats.about.abilities.join(', ')}
            </span>
          </div>
        </div>
        <div className={`${activeMenu === 'Base Stats' ? 'flex' : 'hidden'}`}>
          <div className='flex flex-col w-full'>
            <DetailBaseStat
              name='HP'
              value={stats.base_stats.hp}
              max={100}
            />
            <DetailBaseStat
              name='Attack'
              value={stats.base_stats.attack}
              max={100}
            />
            <DetailBaseStat
              name='Sp. Atk'
              value={stats.base_stats.special_attack}
              max={100}
            />
            <DetailBaseStat
              name='Sp. Def'
              value={stats.base_stats.special_defense}
              max={100}
            />
            <DetailBaseStat
              name='Defense'
              value={stats.base_stats.defense}
              max={100}
            />
            <DetailBaseStat
              name='Total'
              value={stats.base_stats.total}
              max={600}
            />
            {/* <span className='opacity-40'>HP</span>
            <span className='opacity-40'>Attack</span>
            <span className='opacity-40'>Defense</span>
            <span className='opacity-40'>Sp. Atk</span>
            <span className='opacity-40'>Sp. Def</span>
            <span className='opacity-40'>Defense</span>
            <span className='opacity-40'>Total</span> */}
          </div>
          {/* <div className='flex flex-col basis-1/4'>
            <span>{stats.base_stats.hp}</span>
            <span>{stats.base_stats.attack}</span>
            <span>{stats.base_stats.defense}</span>
            <span>{stats.base_stats.special_attack}</span>
            <span>{stats.base_stats.special_defense}</span>
            <span>{stats.base_stats.defense}</span>
            <span>{stats.base_stats.total}</span>
          </div> */}
          {/* <div className='flex flex-col basis-3/4 text-right'>
            <div
              className={`${
                stats.base_stats.hp < 50 ? 'bg-red-500' : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.attack < 50 ? 'bg-red-500' : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.defense < 50 ? 'bg-red-500' : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.special_attack < 50
                  ? 'bg-red-500'
                  : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.special_defense < 50
                  ? 'bg-red-500'
                  : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.defense < 50 ? 'bg-red-500' : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
            <div
              className={`${
                stats.base_stats.total < 50 ? 'bg-red-500' : 'bg-green-500'
              } h-0.5 w-1/2`}
            />
          </div> */}
        </div>
        <div className={`${activeMenu === 'Moves' ? '' : 'hidden'}`}>
          <p>Moves:</p>
          {stats.moves
            .map((move) => {
              return move
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            })
            .join(', ')}
        </div>
      </div>
    </div>
  );
}

export default DetailStats;
