import { ChakraProvider, Fade } from "@chakra-ui/react";

import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <StoreProvider>
        <Fade key={router.route} in="true">
          <Component {...pageProps} />
        </Fade>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
