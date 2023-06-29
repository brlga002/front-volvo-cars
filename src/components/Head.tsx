import { Block, Text } from "vcc-ui";

type HeadProps = {
  title: string;
  subTitle?: string;
};

function Head(props: HeadProps) {
  return (
    <Block
      extend={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 24,
      }}
      as="header"
    >
      <Text
        variant="peary"
        extend={{
          onlyS: { fontSize: "3rem" },
        }}
        as="h1"
      >
        {props.title}
      </Text>
      {props.subTitle && (
        <Text
          variant="hillary"
          extend={{
            onlyS: { fontSize: "1rem" },
          }}
          as="h2"
        >
          {props.subTitle}
        </Text>
      )}
    </Block>
  );
}

export default Head;
