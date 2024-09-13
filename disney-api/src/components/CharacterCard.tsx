import { ICharacterCard } from '../types/characterType';
import styled from 'styled-components';

export default function CharacterCard({ name, imageUrl }: ICharacterCard) {
  return (
    <Card>
      <Image src={imageUrl} alt="disney character" />
      <Name className="character-name">{name}</Name>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h2`
  margin-top: 10px;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transition: color 0.3s;
`;
