import { BASE_API } from "./constants";
import { ICharacter, ICharacters } from "./models";

export const getCharacters = (page?: string): Promise<ICharacters> => {
  return new Promise((resolve, reject) => {
    const params = page ? `/?page=${page}` : "";

    fetch(`${BASE_API}character${params}`)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCharacter = (id: string): Promise<ICharacter> => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_API}character/${id}`)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => {
        reject(error);
      });
  });
};
