export interface ICustomCharacter {
  id?: string;
  name: string;
  image: string;
  age: string;
  gender: string;
  status: "Alive" | "Dead" | "unknown";
  origin: string;
}
