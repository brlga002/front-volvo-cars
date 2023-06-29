import Image from "next/image";
import { useRouter } from "next/router";
import {
  Block,
  Button,
  Card,
  CardContent,
  Spacer,
  Text,
  View,
  useTheme,
} from "vcc-ui";

import { Car } from "interfaces/Car";

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
  const router = useRouter();
  const theme = useTheme();

  const buttonOptions =
    router.pathname === "/learn/[id]"
      ? { route: `/shop/${car.id}`, buttonLabel: "Shop" }
      : { route: `/learn/${car.id}`, buttonLabel: "Learn" };

  return (
    <Block
      key={car.id}
      as="article"
      extend={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Card>
        <Block
          extend={{
            background: theme.color.background.secondary,
            height: 300,
            width: 400,
            maxWidth: 800,
            position: "relative",
          }}
        >
          <Image src={car.imageUrl} alt={car.modelName} layout="fill" />
        </Block>

        <CardContent>
          <Text variant="amundsen">{car.bodyType.toLocaleUpperCase()}</Text>
          <Spacer />
          <Text>{car.modelType}</Text>
          <Spacer size={2} />
          <View spacing={2}>
            <Button
              intent="secondary"
              onClick={() => router.push(buttonOptions.route)}
            >
              {buttonOptions.buttonLabel}
            </Button>
          </View>
        </CardContent>
      </Card>
    </Block>
  );
}

export default CarCard;
