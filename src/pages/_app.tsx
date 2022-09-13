import { ChakraProvider } from "@chakra-ui/react";

import CustomTheme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
