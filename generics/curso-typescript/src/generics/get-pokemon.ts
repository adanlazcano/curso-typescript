import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (id: number): Promise<Pokemon | undefined> => {
  try {
    const { data } = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
