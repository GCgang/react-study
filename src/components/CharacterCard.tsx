import { ICharacter } from '../types/characterType';

export default function CharacterCard({
  character,
}: {
  character: ICharacter;
}) {
  const { name, imageUrl } = character;
  return (
    <div>
      <img src={imageUrl} />
      <h2>{name}</h2>
    </div>
  );
}
