import './App.css';

function AppJSX() {
  const name = '현준'
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <h2>Hello!</h2>
      <p>HJ</p>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default AppJSX;
