import {
  useContext,
  ReactNode,
  useState,
  createContext,
  useEffect,
} from "react";

import { Car } from "interfaces/Car";
import { api } from "services/api";

interface ApiContextProps {
  cars: Car[];
  getCars: () => void;
  findCarById: (id: string) => Car | null;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);

interface ProvideApiProps {
  children: ReactNode;
}

const ProvideApi = ({ children }: ProvideApiProps) => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const data = await api.getCars();
    setCars(data);
  };

  const findCarById = (id: string): null | Car => {
    return cars.find((car) => car.id === id) ?? null;
  };

  return (
    <ApiContext.Provider
      value={{
        findCarById,
        cars,
        getCars,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error("useApi must use within ApiContext");
  return context;
};

export { ProvideApi, useApi };
