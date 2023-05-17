import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface HowDoCardProps {
  howDo: {
    id: number;
    title: string;
    description: string;
    imageLink: string;
  };
}

const HowDoCard: React.FC<HowDoCardProps> = ({ howDo }) => {
  return (
    <>
      <Flex
        w={{ base: "100%", md: "30%" }}
        h={{ base: "30em", md: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        textAlign={"left"}
        _groupHover={{
          alignItems: "center",
          borderColor: "#778da9",
          borderWidth: "2px",
        }}
        transition={"1s"}
      >
        <Heading>{howDo.title}</Heading>
        <Text _groupHover={{ textAlign: "center" }}>{howDo.description}</Text>
        <Box boxSize="sm">
          <Image
            src={howDo.imageLink}
            alt="Dan Abramov"
            display={"none"}
            _groupHover={{ display: "flex" }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default HowDoCard;
