import {
  Text,
  Flex,
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import plusIcon from "../../assets/plusIcon.svg";
import infoIcon from "../../assets/infoIcon.svg";

export default function Card({ prod, addToCartHandler }) {
  const { id, description, name, img, price } = prod;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={{ base: "42vw", md: "30vw" }}
      h={{ base: "22vh", md: "35vh" }}
      shadow="2xl"
      rounded="lg"
      backdropFilter="auto"
      backdropBlur="8px"
      my="auto"
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="1px solid #171923"
      overflow="hidden"
    >
      <Box px={4} py={2} h="50%">
        <Heading
          as="h1"
          color="gray.100"
          fontWeight="bold"
          fontSize={{ base: "sm", md: "xl" }}
        >
          {name}
        </Heading>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={2}>{description}</ModalBody>
        </ModalContent>
      </Modal>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={2}
        bg="gray.900"
        flexDirection={{ base: "row", md: "row" }}
      >
        <Heading
          as="h2"
          color="white"
          fontWeight="bold"
          fontSize={{ base: "md", md: "2xl" }}
          mx={1}
        >
          ${price}
        </Heading>
        <Flex gap={2} mx={1}>
          <Button
            onClick={onOpen}
            bg="white"
            p={1}
            size={{ base: "xs", md: "sm" }}
            color="gray.900"
            fontWeight="bold"
            shadow="2xl"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.300",
            }}
          >
            <Image src={infoIcon} w="16px" h="16px" alt="info" p={1} />
          </Button>
          <Button
            onClick={() => addToCartHandler(prod)}
            bg="white"
            p={1}
            size={{ base: "xs", md: "sm" }}
            color="gray.900"
            fontWeight="bold"
            shadow="2xl"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.300",
            }}
          >
            <Image src={plusIcon} w="16px" h="16px" alt="plus" p={1} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
