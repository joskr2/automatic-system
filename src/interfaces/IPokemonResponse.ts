export interface IPokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}
export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  id: number | string;
  name: string;
  picture: string;
  color?: string;
}
