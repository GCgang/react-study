import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharactersList } from '../utils/api';
import { ICharacterList } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  const { isLoading, data: characters } = useQuery<ICharacterList>({
    queryKey: ['characters'],
    queryFn: fetchCharactersList,
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh 상태 유지
  });

  return (
    <div>
      <h2>Disney Characters</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {characters?.map(({ id, name, imageUrl }) => (
            <li key={id}>
              <Link to={`/character/${id}`} state={{ name, imageUrl }}>
                <CharacterCard name={name} imageUrl={imageUrl} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
