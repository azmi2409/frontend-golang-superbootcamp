import React from "react";
import Email from "./Email";
import Whatsapp from "./Whatsapp";
import { Container, Grid } from "./Wrapper";
import Language from "./Language";

const Heading = () => {
  return (
    <Container>
      <Grid gap="8">
        <Email />
        <Whatsapp />
      </Grid>
      <Grid gap="4">
        <Language />
        <div>USD</div>
        <div>Login</div>
        <div>WishList</div>
        <div>Cart</div>
      </Grid>
    </Container>
  );
};

export default Heading;
