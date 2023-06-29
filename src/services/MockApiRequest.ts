import { ApiRequest } from "interfaces/ApiRequest";
import { Car } from "interfaces/Car";
import response from "api/cars.json";

export class MockApiRequest implements ApiRequest {
  async getCars(): Promise<Car[]> {
    try {      
      const cars = response as Car[];
      return cars;
    } catch (error) {
      return [];
    }
  }

  async findCarById(id: string): Promise<Car | null> {
    try {      
      const cars = response as Car[];
      const car = cars.find((car) => car.id === id);
      return car ?? null;
    } catch (error) {
      return null;
    }
  }
}
