import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header>Disney Characters</header>
      <Link to="/character/1">Detail</Link>
    </>
  );
}
