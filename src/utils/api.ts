import { ICharacterList, ICharacterDetail } from '../types/characterType';

const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';
const getCharcterListUrl = () => `${BASE_URL}/characters`;
const getCharacterDetail = (id: string | undefined) =>
  `${BASE_URL}/characters/${id}`;

export async function fetchCharactersList(): Promise<ICharacterList> {
  const response = await fetch(getCharcterListUrl());
  if (!response?.ok) {
    throw new Error('Failed to fetch character list');
  }
  const json: ICharacterList = await response.json();
  return json.slice(0, 100);
}

export async function fetchCharacterDetail(
  id: string | undefined
): Promise<ICharacterDetail> {
  const response = await fetch(getCharacterDetail(id));
  if (!response?.ok) {
    throw new Error('Character not found');
  }
  const json: ICharacterDetail = await response.json();
  return json;
}
