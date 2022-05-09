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
  HStack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import plusIcon from "../../assets/plusIcon.svg";
import minusIcon from "../../assets/minusIcon.svg";
import { removeItem } from "@chakra-ui/utils";

export default function CartItem({
  item,
  removeItemHandler,
  addToCartHandler,
}) {
  const { name, price, addItem } = item;
  return (
    <Flex
      w="full"
      rounded="md"
      mb={4}
      justifyContent="space-around"
      border="1px solid gray"
      mx="auto"
      px={2}
    >
      <VStack p={2} textAlign="center" w="70%">
        <Text fontWeight="semibold">{name}</Text>
        <Text fontSize="xl">$ {price}</Text>
      </VStack>
      <HStack w="30%">
        <Button
          size="sm"
          colorScheme="green"
          onClick={() => addToCartHandler(item)}
        >
          <Image src={plusIcon} w="16px" h="16px" alt="plus" p={1} />
        </Button>
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => removeItemHandler(item)}
        >
          <Image src={minusIcon} w="16px" h="16px" alt="minus" p={1} />
        </Button>
      </HStack>
    </Flex>
  );
}
