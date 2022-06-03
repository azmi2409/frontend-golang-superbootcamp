import React from "react";
import Email from "./Email";
import Whatsapp from "./Whatsapp";
import { Container, Grid } from "./Wrapper";

const Heading = () => {
  return (
    <Container>
      <Grid gap={2}>
        <Email />
        <Whatsapp />
      </Grid>
      <Grid gap={2}>
        <div>USD</div>
        <div>Login</div>
        <div>WishList</div>
        <div>Cart</div>
      </Grid>
    </Container>
  );
};

export default Heading;
