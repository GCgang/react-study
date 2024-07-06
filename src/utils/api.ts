import { ICharacterList, ICharacterDetail } from '../types/characterType';

const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';
const CHARACTER_LIST_URL = `${BASE_URL}/characters`;

export async function fetchCharactersList(): Promise<ICharacterList> {
  const response = await fetch(CHARACTER_LIST_URL);
  const json: ICharacterList = await response.json();
  return json;
}

export async function fetchCharacterDetail(
  id: string
): Promise<ICharacterDetail> {
  const response = await fetch(`${CHARACTER_LIST_URL}/${id}`);
  const json: ICharacterDetail = await response.json();
  return json;
}
