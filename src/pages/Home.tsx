import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharactersList } from '../utils/api';
import { ICharacterList } from '../types/characterType';
import CharacterCard from '../components/CharacterCard';
import styled from 'styled-components';

export default function Home() {
  const { isLoading, data: characters } = useQuery<ICharacterList>({
    queryKey: ['characters'],
    queryFn: fetchCharactersList,
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh 상태 유지
  });

  return (
    <Container>
      <Title>Disney Characters</Title>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterList>
          {characters?.map(({ id, name, imageUrl }) => (
            <CharacterItem key={id}>
              <StyledLink to={`/character/${id}`} state={{ name, imageUrl }}>
                <CharacterCard name={name} imageUrl={imageUrl} />
              </StyledLink>
            </CharacterItem>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  font-size: 1.5rem;
`;

const CharacterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-items: center;
  padding: 20px;
`;

const CharacterItem = styled.li`
  list-style: none;
  transition: transform 0.3s, background-color 0.3s;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;

  &:hover {
    transform: scale(1.1);
    background-color: white;

    .character-name {
      color: black;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 150px;
  height: 150px;
`;
