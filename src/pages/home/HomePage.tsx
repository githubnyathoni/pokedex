import { GET_ALL_POKEMON } from '@/api/services/pokemon';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { useEffect, useRef, useState } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [nextUrl, setNextUrl] = useState();

  const RETRIEVE_ALL_POKEMON = async () => {
    setLoading(true);

    const result = await GET_ALL_POKEMON(nextUrl);

    setPokemons((prevPokemons) => [...prevPokemons, ...result.results]);
    setNextUrl(result.next);
    setLoading(false);
  };

  useEffect(() => {
    RETRIEVE_ALL_POKEMON();
  }, [page]);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

  return (
    <div>
      <div className='flex flex-wrap gap-4 justify-center mt-16'>
        {pokemons.map((pokemon, index) => (
          <Card
            key={index}
            pokemon={pokemon}
          />
        ))}
      </div>
      {loading ? <Loading /> : <></>}
      <div
        ref={observerRef}
        className='h-10'
      ></div>
    </div>
  );
}

export default HomePage;
