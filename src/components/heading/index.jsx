import React from "react";
import Email from "./Email";
import Whatsapp from "./Whatsapp";
import { Container, Grid } from "./Wrapper";
import { socialMedia } from "../../utils/socialMedia";

const Heading = () => {
  return (
    <Container>
      <Grid gap={5}>
        <Email />
        <Whatsapp />
      </Grid>
      <Grid gap={5}>
        {socialMedia.map((item) => (
          <a
            target="_blank"
            key={item.name}
            href={item.url}
            className="hover:text-blue-500 transition-colors duration-150"
          >
            <item.Icon className="h-6 w-6" />
          </a>
        ))}
      </Grid>
    </Container>
  );
};

export default Heading;
