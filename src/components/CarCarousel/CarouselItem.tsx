import { Block, Link, Spacer, Text } from "vcc-ui";
import { Car } from "interfaces/Car";
import Image from "next/image";

type CarouselItemProps = {
  car: Car;
};

function CarouselItem({ car }: CarouselItemProps) {
  return (
    <Block
      key={car.id}
      as="article"
      extend={{
        background: "white",
      }}
    >
      <Text subStyle="inline-link" as="h2">
        <b>{car.bodyType.toLocaleUpperCase()}</b>
      </Text>
      <Block
        extend={{
          display: "flex",
          gap: 4,
          untilM: {
            flexDirection: "column",
            gap: 0,
          },
        }}
      >
        <Text subStyle="emphasis">
          <b>{car.modelName}</b>
        </Text>
        <Text subStyle="inline-link">{car.modelType}</Text>
      </Block>

      <div>
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          height="400px"
          width="500px"
          objectFit="contain"
        />
      </div>

      <Block
        extend={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Link href={`/learn/${car.id}`} arrow="right">
          LEARN
        </Link>
        <Spacer size={2} />
        <Link href={`/shop/${car.id}`} arrow="right">
          SHOP
        </Link>
      </Block>
    </Block>
  );
}

export default CarouselItem;
