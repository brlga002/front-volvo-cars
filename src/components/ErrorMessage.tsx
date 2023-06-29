import { Block, Card, CardContent, Message, Text } from "vcc-ui";

type ErrorMessageProps = {
  text: string;
};

function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <Block
      className="transition-card-low"
      extend={{
        padding: 20,
        minWidth: 300,
        marginTop: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <CardContent>
          <Message type="error">
            <Text variant="amundsen">{text}</Text>
          </Message>
        </CardContent>
      </Card>
    </Block>
  );
}

export default ErrorMessage;
