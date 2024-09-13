import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { fetchCharacterDetail } from '../utils/api';
import { ICharacterCard, ICharacterDetail } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';
import BackButton from '../components/BackButton';
import styled from 'styled-components';

export default function Character() {
  const { id } = useParams<{ id: string }>();
  const state = useLocation().state as ICharacterCard;
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: characterDetail,
  } = useQuery<ICharacterDetail>({
    queryKey: [id],
    queryFn: () => fetchCharacterDetail(id),
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh 상태 유지
  });

  // url로 id에 바로 접근 시 Home으로 redirect
  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state) return null;

  return (
    <Container>
      <BackButton />
      <CharacterCard name={state.name} imageUrl={state.imageUrl} />

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : isError ? (
        <Error>404 Not Found</Error>
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

const Loader = styled.div`
  margin-top: 30px;
  font-size: 2rem;
`;

const Error = styled.div`
  margin-top: 30px;
  font-size: 2rem;
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
