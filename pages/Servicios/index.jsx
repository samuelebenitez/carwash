import { Box, InputGroup, Grid, Button } from "@chakra-ui/react";
import Card from "../../components/Card/index.jsx";
import Link from "next/link";
import cartIcon from "../../assets/cartIcon.svg";
import Image from "next/Image";
import products from "../../products/products.json";
import { useContext } from "react";
import { Store } from "../../utils/Store";

export default function Servicios() {
  const { state, dispatch } = useContext(Store);

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
    console.log(subTotal);
  }

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
        <Button w="10vw" p={0}>
          <Image src={cartIcon} w="32px" h="32px" alt="" />
        </Button>
        <Link passHref href="/Adios">
          <Button w="90vw">Cobrar {subTotal()}</Button>
        </Link>
      </InputGroup>
    </Box>
  );
}
