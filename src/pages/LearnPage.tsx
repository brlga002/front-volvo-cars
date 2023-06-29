import { useRouter } from "next/router";
import { Block } from "vcc-ui";

import Head from "components/Head";
import CarCard from "components/CarCard";
import { useApi } from "providers/apiProvider";
import ErrorMessage from "components/ErrorMessage";

function LearnPage() {
  const { cars, findCarById } = useApi();
  const router = useRouter();
  const { id } = router.query;
  const car = findCarById(String(id));

  if (!car && cars.length > 0)
    return <ErrorMessage text={`The car with id: ${id} was not found`} />;

  if (!car) return null;

  return (
    <Block className="transition-card" extend={{ padding: 20 }}>
      <Head title={car.modelName} />
      <CarCard car={car} />
    </Block>
  );
}

export default LearnPage;
