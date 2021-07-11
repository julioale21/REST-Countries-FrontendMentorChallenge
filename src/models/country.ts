interface Language {
  name: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export default interface Country {
  [key: string]: string | Array<string> | Language[];
  name: string;
  topLevelDomain: string[];
  nativeName: string;
  capital: string;
  region: string;
  borders: string[];
  currencies: Currency[];
  subRegion: string;
  population: string;
  languages: Language[];
  flag: string;
}
