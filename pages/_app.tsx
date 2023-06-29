import "public/css/styles.css";
import React from "react";
import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Head from "next/head";
import { FavIcons } from "@volvo-cars/favicons/react";
import HeaderNavigation from "components/HeadNavigation";
import { ProvideApi } from "providers/apiProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
            <Component {...pageProps} />
          </ProvideApi>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}
