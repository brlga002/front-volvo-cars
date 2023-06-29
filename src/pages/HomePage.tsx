import { useState } from "react";
import { Block } from "vcc-ui";

import CarCarousel from "components/CarCarousel";
import FilterCarTabNav from "components/FilterCarTabNav";
import Head from "components/Head";
import { useApi } from "providers/apiProvider";

function HomePage() {
  const { cars } = useApi();
  const [active, setActive] = useState("all");

  const filteredCars =
    active === "all" ? cars : cars.filter((car) => car.bodyType === active);

  const uniqueBodyTypeOptions = [...new Set(cars.map((car) => car.bodyType))];

  return (
    <Block
      extend={{
        onlyS: { padding: 4 },
        onlyM: { padding: 20 },
        fromL: { padding: 30 },
      }}
    >
      <Head
        title="Volvo Cars"
        subTitle="Our latest and greatest recharge cars."
      />

      <main>
        <FilterCarTabNav
          filter={active}
          setFilter={setActive}
          options={uniqueBodyTypeOptions}
        />
        <CarCarousel cars={filteredCars}></CarCarousel>
      </main>
    </Block>
  );
}

export default HomePage;
