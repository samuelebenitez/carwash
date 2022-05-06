import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import Image from "next/Image";
import carSVG from "../assets/car-wash.svg";
import Link from "next/Link";
import { useBreakpointValue } from "@chakra-ui/react";

function Home() {
  const buttonSizes = useBreakpointValue({ base: "sm", lg: "lg" });
  const imageHeight = useBreakpointValue(["200", "230"]);
  const imageWidth = useBreakpointValue(["200", "600"]);

  return (
    <Box
      bgGradient="linear(to-l, #63B3ED
        , #086F83)"
    >
      <Box
        bgColor="transparent"
        p="32px"
        textAlign="center"
        w={{ base: "90vw", md: "70vw" }}
        height="100vh"
        m="auto"
        boxShadow="lg"
      >
        <Image
          src={carSVG}
          alt="auto"
          height={imageHeight}
          width={imageWidth}
        />
        <VStack justifyContent="space-around" h={{ base: "50vh", lg: "60vh" }}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
            textTransform="uppercase"
            color="blackAlpha.800"
            bgGradient="linear(to-l, #2B6CB0, #1A365D)"
            bgClip="text"
            letterSpacing={{ base: "5px", lg: "10px" }}
            maxW={{ base: "80vw", md: "40vw" }}
          >
            Bienvenido a WashCar
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "sm", lg: "xl" }}
            fontWeight="semibold"
            color="gray.300"
          >
            Pulse siguiente para elegir el servicio
          </Heading>
          <Link href="/Servicios">
            <Button
              bgGradient="linear(to-l, #2B6CB0, #1A365D)"
              boxShadow="xl"
              color="blue.50"
              size={buttonSizes}
            >
              Siguiente
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}

export default Home;
