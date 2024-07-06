export interface ICharacter {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ICharacterList {
  character: ICharacter[];
}

export interface ICharacterDetail extends ICharacter {
  films: string[];
  sourceUrl: string;
}
