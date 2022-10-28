import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/96651559?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Crypto trading app. Made with ❤️ ☕ by Prateek Agrawal
            <br />
            <a href="https://www.linkedin.com/in/prateekbka/">
              {" "}
              <b>Linkedin Link </b>{" "}
            </a>
            <br />
            <a href="https://www.github.com/prateek-bka/">
              <b>Github Link</b>
            </a>
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Prateek</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
