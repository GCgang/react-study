import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { fetchCharacterDetail } from '../utils/api';
import { ICharacterCard, ICharacterDetail } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';

export default function Character() {
  const { id } = useParams<{ id: string }>();
  const state = useLocation().state as ICharacterCard;
  const navigate = useNavigate();

  const { isLoading, data: characterDetail } = useQuery<ICharacterDetail>({
    queryKey: [id],
    queryFn: () => fetchCharacterDetail(id),
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh 상태 유지
  });

  // url로 바로 접근 시 redirect
  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);
  if (!state) return null;

  return (
    <div>
      <CharacterCard name={state.name} imageUrl={state.imageUrl} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {characterDetail?.films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
