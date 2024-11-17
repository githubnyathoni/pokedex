// all application shared type
export const typeColors: Record<string, string> = {
  bug: 'bg-lime-500',
  dark: 'bg-gray-800',
  dragon: 'bg-indigo-600',
  electric: 'bg-yellow-400',
  fairy: 'bg-pink-300',
  fighting: 'bg-red-600',
  fire: 'bg-red-500',
  flying: 'bg-blue-300',
  ghost: 'bg-purple-800',
  grass: 'bg-green-400',
  ground: 'bg-amber-600',
  ice: 'bg-cyan-300',
  normal: 'bg-gray-300',
  poison: 'bg-purple-500',
  psychic: 'bg-pink-500',
  rock: 'bg-yellow-700',
  shadow: 'bg-gray-900',
  steel: 'bg-gray-400',
  unknown: 'bg-gray-200',
  water: 'bg-blue-400',
  default: 'bg-gray-200',
};

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}
