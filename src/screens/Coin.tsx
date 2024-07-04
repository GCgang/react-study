import { useParams } from 'react-router-dom';

export default function Coin() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <h1>Coin: {id}</h1>;
}
