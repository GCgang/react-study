import {
  countiresState,
  eCountryStatus,
  ICountry,
} from "../state/countiresState";
import { useSetRecoilState } from "recoil";

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
    <>
      <span>{country.name}</span>
      {country.status === eCountryStatus.TO_VISIT && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.VISITED)}>
            ✅
          </button>
          <button onClick={handleRemove}>🗑️</button>
        </>
      )}
      {country.status === eCountryStatus.VISITED && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.FAVORITE)}>
            👍
          </button>
          <button onClick={() => handleStatusChange(eCountryStatus.TO_VISIT)}>
            ❌
          </button>
        </>
      )}
      {country.status === eCountryStatus.FAVORITE && (
        <>
          <button onClick={() => handleStatusChange(eCountryStatus.VISITED)}>
            👎
          </button>
        </>
      )}
    </>
  );
}
