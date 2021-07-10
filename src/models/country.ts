interface Language {
  name: string;
}

export default interface Country {
  [key: string]: string | Array<string> | Language[];
  name: string;
  topLevelDomain: string[];
  capital: string;
  region: string;
  borders: string[];
  subRegion: string;
  population: string;
  languages: Language[];
  flag: string;
}
