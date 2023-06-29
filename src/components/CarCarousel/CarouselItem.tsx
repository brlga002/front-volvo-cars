import { Block, Link, Spacer, Text, View } from "vcc-ui";
import { Car } from "interfaces/Car";
import Image from "next/image";
import { useRouter } from "next/router";

type CarouselItemProps = {
  car: Car;
};

function CarouselItem({ car }: CarouselItemProps) {
  const router = useRouter();

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
      <Text subStyle="emphasis">
        <b>{car.modelName}</b>
      </Text>
      <Text subStyle="inline-link">{car.modelType}</Text>

      <div>
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          height="400px"
          width="500px"
          objectFit="contain"
        />
      </div>
      <View
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "14px",
        }}
      >
        <Link
          href="#"
          arrow="right"
          onClick={() => router.push(`learn/${car.id}`)}
        >
          Learn
        </Link>
        <Spacer size={4} />
        <Link
          href="#"
          onClick={() => router.push(`shop/${car.id}`)}
          arrow="right"
        >
          Shop
        </Link>
      </View>
    </Block>
  );
}

export default CarouselItem;
