import { useRecoilValue } from 'recoil';
import {
  ICountry,
  countiresState,
  eCountryStatus,
} from '../state/countiresState';
import CountryItem from './CountryItem';

interface ICountryListSection {
  title: string;
  status: eCountryStatus;
}

export default function CountryListSection({
  title,
  status,
}: ICountryListSection) {
  const countries = useRecoilValue(countiresState);
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {countries
          .filter((country) => country.status === status)
          .map((country: ICountry) => (
              <CountryItem country={country} />
          ))}
      </ul>
    </section>
  );
}
