import { atom } from 'recoil';

export enum eCountryStatus {
  TO_VISIT = 'toVisit',
  VISITED = 'visited',
  FAVORITE = 'favorite',
}

export interface ICountry {
  name: string;
  status: eCountryStatus;
}

export const countiresState = atom<ICountry[]>({
  key: 'countires',
  default: [],
});
