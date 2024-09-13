export interface ICharacter {
  id: string;
  name: string;
  imageUrl: string;
}

export type ICharacterList = ICharacter[];

export interface ICharacterDetail extends ICharacter {
  films: string[];
  sourceUrl: string;
}

export interface ICharacterCard {
  name: string;
  imageUrl: string;
}
