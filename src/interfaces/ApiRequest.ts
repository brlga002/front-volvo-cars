import { Car } from "./Car";

export interface ApiRequest {
  getCars: () => Promise<Car[]>;
  findCarById: (id: string) => Promise<null | Car>;
}
