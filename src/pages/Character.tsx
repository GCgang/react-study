import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { fetchCharacterDetail } from '../utils/api';
import { ICharacterCard, ICharacterDetail } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';
import styled from 'styled-components';

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
    <Container>
      <CharacterCard name={state.name} imageUrl={state.imageUrl} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Filmlist>
          {characterDetail?.films.map((film) => (
            <FilmItem key={film}>{film}</FilmItem>
          ))}
        </Filmlist>
      )}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
`;

const Filmlist = styled.ul`
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const FilmItem = styled.li`
  background-color: white;
  color: black;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  display: inline-block;
  margin-right: 10px;
`;
