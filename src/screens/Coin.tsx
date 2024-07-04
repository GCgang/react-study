import { useParams } from 'react-router-dom';

export default function Coin() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <li>Coin: {id}</li>;
}
