import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharactersList } from '../utils/api';
import { ICharacterList } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  const { isLoading, data } = useQuery<ICharacterList>({
    queryKey: ['characters'],
    queryFn: fetchCharactersList,
  });

  return (
    <>
      <h2>Disney Characters</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      )}
      <Link to="/character/1">Detail</Link>
    </>
  );
}
