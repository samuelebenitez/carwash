import { Box, Heading, Button } from "@chakra-ui/react";
import Image from "next/Image";
import carBye from "../../assets/carBye.svg";
import { useBreakpointValue } from "@chakra-ui/react";
import refreshIcon from "../../assets/refreshIcon.svg";
import Link from "next/link";

export default function Adios() {
  const imgHeight = useBreakpointValue(["300", "400"]);
  const imgWidth = useBreakpointValue(["200", "400"]);
  return (
    <Box
      bgGradient="linear(to-l, #63B3ED
  , #065666)"
    >
      <Box
        bgColor="transparent"
        textAlign="center"
        w={{ base: "90vw", md: "70vw" }}
        height="100vh"
        m="auto"
        boxShadow="lg"
        d="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Image src={carBye} alt="carbye" height={imgHeight} width={imgWidth} />
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          mx="auto"
          h={{ base: "40vh", lg: "60vh" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
            textTransform="uppercase"
            bgGradient="linear(to-l, #BEE3F8, #EBF8FF)"
            bgClip="text"
            letterSpacing={{ base: "3px", lg: "10px" }}
            maxW={{ base: "80vw", md: "40vw" }}
          >
            ¡GRACIAS POR VISITARNOS!
          </Heading>
          <Link passHref href="/">
            <Button bgGradient="linear(to-l, #2B6CB0, #1A365D)">
              <Image src={refreshIcon} width="24px" height="24px" alt="" />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
