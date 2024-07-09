import CountryListSection from './CountryListSection';
import { eCountryStatus } from '../state/countiresState';

export default function CountriesList() {
  return (
    <div>
      <CountryListSection title=" " status={eCountryStatus.TO_VISIT} />
      <CountryListSection
        title="내가 가본 나라들"
        status={eCountryStatus.VISITED}
      />
      <CountryListSection
        title="내가 좋아하는 나라들"
        status={eCountryStatus.FAVORITE}
      />
    </div>
  );
}
