import { ICharacterCard } from '../types/characterType';

export default function CharacterCard({ name, imageUrl }: ICharacterCard) {
  return (
    <div>
      <img src={imageUrl} alt="disney character" />
      <h2>{name}</h2>
    </div>
  );
}
