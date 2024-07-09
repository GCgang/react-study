import {
  countiresState,
  eCountryStatus,
  ICountry,
} from '../state/countiresState';
import { useSetRecoilState } from 'recoil';

interface ICountryItem {
  country: ICountry;
}
export default function CountryItem({ country }: ICountryItem) {
  const setContries = useSetRecoilState(countiresState);

  const handleStatusChange = (newStatus: eCountryStatus) => {
    setContries((oldCountries) =>
      oldCountries.map((c) =>
        c.name === country.name ? { ...c, status: newStatus } : c
      )
    );
  };
  const handleRemove = () => {
    setContries((oldCountires) =>
      oldCountires.filter((c) => c.name !== country.name)
    );
  };
  return (
    <li key={country.name}>
      <span>{country.name}</span>
      {country.status === eCountryStatus.TO_VISIT && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.VISITED)}>
            가본 나라로 이동
          </button>
          <button onClick={handleRemove}>제거</button>
        </>
      )}
      {country.status === eCountryStatus.VISITED && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.TO_VISIT)}>
            가고싶은 나나로 이동
          </button>
          <button onClick={() => handleStatusChange(eCountryStatus.FAVORITE)}>
            좋아하는 나라로 이동
          </button>
        </>
      )}
      {country.status === eCountryStatus.FAVORITE && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.VISITED)}>
            가본 나라로 이동
          </button>
        </>
      )}
    </li>
  );
}
