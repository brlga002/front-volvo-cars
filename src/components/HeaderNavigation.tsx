import { useRouter } from "next/router";
import { Block, Click, Logo, NavItem, Text, useTheme } from "vcc-ui";

type HeaderNavigationProps = {};

function HeaderNavigation(props: HeaderNavigationProps) {
  const router = useRouter();
  const theme = useTheme();

  const isHomePage = router.pathname === "/";

  return (
    <Block
      as="nav"
      extend={{
        background: theme.color.background.secondary,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Block
        extend={{
          marginLeft: 30,
          padding: 10,
        }}
      >
        <Click onClick={() => router.push("/")}>
          <Logo type="spreadmark" height={10} />
        </Click>
      </Block>

      <Block as="nav" extend={{ marginRight: 30 }}>
        <NavItem onClick={() => router.push("/")} isActive={isHomePage}>
          <Text variant="amundsen">{isHomePage ? "Home" : "Go Back"}</Text>
        </NavItem>
      </Block>
    </Block>
  );
}

export default HeaderNavigation;
