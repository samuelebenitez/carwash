import {
  Box,
  InputGroup,
  Grid,
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
import Card from "../../components/Card/index.jsx";
import Link from "next/link";
import cartIcon from "../../assets/cartIcon.svg";
import Image from "next/image";
import products from "../../products/products.json";
import { useContext } from "react";
import { Store } from "../../utils/store.js";
import CartItem from "../../components/CartItem";

export default function Servicios() {
  const { state, dispatch } = useContext(Store);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cart } = state;
  console.log(cart);

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const addToCartHandler = (product) => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, product } });
  };

  function subTotal() {
    let subTotal = 0;
    cart.cartItems.map((item) => {
      subTotal = subTotal + item.price;
      return subTotal;
    });
    if (subTotal != 0) {
      return `$${subTotal}`;
    }
  }

  console.log(cart.cartItems.length);

  return (
    <Box
      bgGradient="linear(to-l, #63B3ED
    , #065666)"
      p={4}
      d="flex"
      flexDirection="column"
      minHeight="100vh"
      justifyContent="space-around"
    >
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        py={4}
      >
        {products.map((prod, key) => (
          <Card key={key} prod={prod} addToCartHandler={addToCartHandler} />
        ))}
      </Grid>
      {/* BOTON DE PAGO */}
      <InputGroup gap="2rem">
        <Button w="10vw" p={0} _after={cart.cartItems.length} onClick={onOpen}>
          <Image src={cartIcon} w="32px" h="32px" alt="" />
          <Box
            pos="absolute"
            top="-1px"
            right="-1px"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="red.100"
            transform="translate(50%,-50%)"
            bg="red.600"
            rounded="full"
          >
            {cart.cartItems.length ?? ""}
          </Box>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hasta acá tenés...</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cart.cartItems.map((item, key) => (
                <CartItem
                  item={item}
                  key={key}
                  removeItemHandler={removeItemHandler}
                  addToCartHandler={addToCartHandler}
                />
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
        <Link passHref href="/Adios">
          <Button w="90vw">Cobrar {subTotal()}</Button>
        </Link>
      </InputGroup>
    </Box>
  );
}
