import "public/css/styles.css";

import React from "react";
import { AppProps } from "next/app";
import NextLink from "next/link";
import Head from "next/head";
import { ConfigProvider, StyleProvider, ThemePicker } from "vcc-ui";
import { FavIcons } from "@volvo-cars/favicons/react";
import HeaderNavigation from "components/HeaderNavigation";
import { ProvideApi } from "providers/apiProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  interface LinkComponentProps {
    children: React.ReactNode;
    href: string | Record<string, unknown>;
  }

  const config = {
    linkComponent: ({ children, href, ...linkProps }: LinkComponentProps) => {
      if (typeof href === "object" || href.indexOf("/") === 0) {
        return (
          <NextLink href={href}>
            <a {...linkProps}>{children}</a>
          </NextLink>
        );
      }

      return (
        <a href={href} {...linkProps}>
          {children}
        </a>
      );
    },
  };

  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Head>
            <title>Volvo Cars</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              lang="en"
            />
            <link
              rel="shortcut icon"
              href="https://www.volvocars.com/static/shared/images/favicons/favicon-16x16.v2.png"
            />
            <FavIcons />
          </Head>
          <HeaderNavigation />
          <ProvideApi>
            <ConfigProvider config={config}>
              <Component {...pageProps} />
            </ConfigProvider>
          </ProvideApi>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}
