export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacters {
  info: Info;
  results: ICharacter[];
}
