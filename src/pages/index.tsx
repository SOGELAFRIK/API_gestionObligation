import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";

//--------------------------------------------assets------------------------------------------------------------------
const colorPallete = {
  schem: "",
  primary_blue: "#1b263b",
  secondary_blue: "#0077b6",
  white: "#fff",
  black: "#000",
};
const colorList = [
  { id: 1, color: "#005f73" },
  { id: 2, color: "#0a9396" },
  { id: 3, color: "#94d2bd" },
  { id: 4, color: "#ee9b00" },
  { id: 5, color: "#bb3e03" },
  { id: 6, color: "#0077b6" },
];
// ---------------------------------------------assets--------------------------------------------------------------------------

// ------------------------------------------structure comment ça marche--------------------------------------------
interface HowDoCardProps {
  howDo: {
    id: number;
    title: string;
    description: string;
    imageLink: string;
  };
  colorScheme: string;
}

const HowDoCard: React.FC<HowDoCardProps> = ({ howDo, colorScheme }) => {
  return (
    <>
      <Flex
        w={{ base: "100%", md: "30%" }}
        h={{ base: "30em", md: "100%" }}
        mb={{ base: "2em", md: "0em" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        textAlign={"left"}
        borderWidth={"2px"}
        borderColor={colorScheme}
        borderRadius={"15px"}
        /* _hover={{
          alignItems: "center",
          borderColor: colorScheme,
          borderWidth: "2px",
          fontStyle: "italic",
        }}*/
        transition={".2s"}
        role="group"
      >
        <Heading color={colorScheme}>{howDo.title}</Heading>
        <Text /*_groupHover={{ textAlign: "center" }}*/ textAlign={"center"}>
          {howDo.description}
        </Text>
        <Box boxSize="sm">
          <Image
            src={howDo.imageLink}
            alt="Dan Abramov"
            // display={"none"}
            // _groupHover={{ display: "flex" }}
          />
        </Box>
      </Flex>
    </>
  );
};
// ------------------------------------------structure comment ça marche--------------------------------------------

// -------------------------------------------structure des avantages ------------------------------------------------
interface Advantage {
  adavantageItem: {
    id: number;
    title: string;
    description: string;
    imageLink: string;
  };
  colorScheme: string;
}

const Avantage: React.FC<Advantage> = ({ adavantageItem, colorScheme }) => {
  return (
    <>
      <Center
        w={{ base: "100%", md: "30%" }}
        h={{ base: "20em", md: "100%" }}
        mb={{ base: "2em", md: "0em" }}
        borderWidth={"2px"}
        borderColor={colorScheme}
        borderRadius={"3xl"}
        // _hover={{
        //   bg: "#778da943",
        //   borderColor: "transparent",
        //   transform: { base: "scale(1.01)", md: "scale(1.1)" },
        //   transition: ".3s",
        //   fontStyle: "italic",
        // }}
        role="group"
      >
        <Flex
          alignItems={"start"}
          justifyContent={"center"}
          flexDirection={"column"}
          textAlign={"left"}
          w={"90%"}
          h={"90%"}
          // _hover={{
          //   alignItems: "center",
          // }}
          // _groupHover={{
          //   textAlign: "center",
          // }}
        >
          <Text color={colorScheme} fontWeight={"bold"}>
            {adavantageItem.title}
          </Text>
          <Text color={colorPallete.white}>{adavantageItem.description}</Text>
        </Flex>
      </Center>
    </>
  );
};
// -------------------------------------------structure des avantages ------------------------------------------------

// --------------------------------------- structure de Fonctionalités------------------------------------------------
interface Fonction {
  fonctionsItems: {
    id: number;
    title: string;
  };
  colorScheme: string;
}
const Fonctions: React.FC<Fonction> = ({ fonctionsItems, colorScheme }) => {
  return (
    <>
      <Center
        w={{ base: "100%", md: "15%" }}
        h={{ base: "15em", md: "100%" }}
        mb={{ base: "2em", md: "0em" }}
        bg={"#ade8f427"}
        borderRadius={"base"}
        color={colorPallete.white}
        _hover={{
          bg: "#778da943",
          borderColor: "transparent",
          transform: { base: "scale(1.01)", md: "scale(1.1)" },
          transition: ".3s",
          fontStyle: "italic",
          color: colorScheme,
        }}
        role="group"
      >
        <Center w={"90%"} h={"90%"} textAlign={"center"}>
          <Text fontWeight={"bold"}>{fonctionsItems.title}</Text>
        </Center>
      </Center>
    </>
  );
}; // --------------------------------------- structure de Fonctionalités--------------------------------------------------
// -------------------------------------------la page en elle meme ------------------------------------------------
export default function Home() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const [colorScheme, setColorScheme] = useState("#94d2bd");
  const changeHandler = (e: string) => {
    setColorScheme(e);
  };

  const [bannerColor, setBannerColor] = useState("transparent");
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset !== 0) {
        setBannerColor("#1b263b72");
        setBlur(true);
      } else {
        setBannerColor("transparent");
        setBlur(false);
      }
    }
  };

  const howDo = [
    {
      id: 1,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.",
      imageLink: "./lieu_de_travail_fille.svg",
    },
    {
      id: 2,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.",
      imageLink: "./lieu_de_travail_fille.svg",
    },
    {
      id: 3,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.",
      imageLink: "./lieu_de_travail_fille.svg",
    },
  ];

  const advantageList = [
    {
      id: 1,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.",
      imageLink: "./lieu_de_travail_fille.svg",
    },
    {
      id: 2,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.",
      imageLink: "./lieu_de_travail_fille.svg",
    },
    {
      id: 3,
      title: "Securite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda eius iusto, vel aspernatur vero soluta. Iste quasi autem iusto ad architecto est dignissimos? Fugit doloribus itaque quis ipsum dolore.x²",
      imageLink: "./lieu_de_travail_fille.svg",
    },
  ];
  const fonctionList = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      imageLink: "",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      imageLink: "",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      imageLink: "",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      imageLink: "",
    },
  ];
  return (
    <>
      <Head>
        <title>RMY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* la box qui contient toute la page  */}
      <Box w={"100%"}>
        {/* le header avec la navigation et les textes  */}
        <Flex
          w={"100%"}
          h={"100vh"}
          bgImage={"url(5.jpg)"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          flexDirection={"column"}
        >
          {/* la navigation */}
          <Center
            w={"100%"}
            h={"7%"}
            bg={bannerColor}
            position={blur ? "fixed" : "relative"}
            zIndex={"banner"}
            backdropFilter={"auto"}
            backdropBlur={blur ? "8px" : "0px"}
          >
            <Flex
              w={"90%"}
              h={"100%"}
              color={colorScheme}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Link href="#" _hover={{ textDecoration: "none" }}>
                <Heading>RMY</Heading>
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                <Text>Connexion</Text>
              </Link>
            </Flex>
          </Center>
          {/* le contenues du header  */}
          <Center w={"100%"} h={"93%"}>
            <Flex w={"90%"} h={"90%"}>
              <Flex
                w={{ base: "100%", sm: "50%" }}
                h={"100%"}
                align={"start"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Heading color={colorPallete.white}>
                  Gestion et suivi des<br></br>
                  obligations avec<br></br>
                </Heading>
                <Heading color={colorScheme}>RMY</Heading>
                <Text color={colorPallete.white}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br></br>
                  Tempore enim eaque veniam aliquam porro quae ut aperiam
                  <br></br>
                  fugit ab commodi est voluptatem nesciunt illo quam iure
                  mollitia,
                </Text>
                <Button
                  colorScheme="blue"
                  bg={colorScheme}
                  w={"15em"}
                  borderRadius={"full"}
                  mt={"5"}
                >
                  Button
                </Button>
              </Flex>
              {isLargerThan768 ? (
                <Center
                  w={"50%"}
                  h={"100%"}
                  bgImage={"url(4.jpg)"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  bgPosition={"center"}
                >
                  {/* <Text>image</Text> */}
                </Center>
              ) : null}
            </Flex>
          </Center>
        </Flex>

        {/* choisir son style  */}
        <Center
          w={"100%"}
          h={{ base: "auto", md: "100vh" }}
          flexDirection={"column"}
          mt={"4em"}
        >
          <Heading color={colorScheme} textAlign={"center"}>
            {"Definissez votre propre style pour l'affichage"}
          </Heading>
          <Text mt={"5"} textAlign={"center"}>
            {"En un clic deffinissez l'affichage"}{" "}
          </Text>

          <Center w={"100%"} mt={"4em"}>
            <Flex
              w={{ base: "100%", md: "80%" }}
              h={{ base: "auto", md: "50vh" }}
              flexDirection={{ base: "column-reverse", md: "row" }}
            >
              <Center
                w={{ base: "100%", md: "80%" }}
                h={{ base: "50vh", md: "100%" }}
                bg={colorScheme}
              >
                Image
              </Center>

              <Center
                w={{ base: "100%", md: "20%" }}
                h={{ base: "10em", md: "100%" }}
              >
                <RadioGroup value={colorScheme} onChange={changeHandler}>
                  <Stack
                    direction={{ base: "row", md: "column" }}
                    justifyContent={"space-between"}
                  >
                    {colorList.map((color) => (
                      <Radio
                        key={color.id}
                        value={color.color}
                        bg={color.color}
                        colorScheme="blue"
                      ></Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Center>
            </Flex>
          </Center>
        </Center>

        {/* comment ça marhce  */}
        <Center
          w={"100%"}
          h={{ base: "auto", md: "100vh" }}
          flexDirection={"column"}
        >
          <Heading color={colorScheme}>{"Comment ça marche ?"}</Heading>
          <Center w={"100%"} h={{ base: "auto", md: "70vh" }} mt={"2em"}>
            <Flex
              w={"90%"}
              h={{ base: "auto", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
            >
              {howDo.map((item) => (
                <HowDoCard
                  key={item.id}
                  howDo={item}
                  colorScheme={colorScheme}
                />
              ))}
            </Flex>
          </Center>
        </Center>

        {/* nos avantages et fonctionalites */}
        <Center
          w={"100%"}
          h={{ base: "auto", md: "150vh" }}
          flexDirection={"column"}
          bg={colorPallete.black}
          color={colorPallete.white}
        >
          <Heading textAlign={"center"}>
            Quelques avantages de notre solution
          </Heading>
          <Text
            textAlign={"center"}
            w={{ base: "100%", md: "40%" }}
            color={"#778da9"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            sint nesciunt, vitae dicta quasi non, iure tempore vel deserunt
            eaque quod ullam ipsum accusantium porro suscipit omnis id
            praesentium facere?
          </Text>
          <Center w={"100%"} h={{ base: "auto", md: "50vh" }} mt={"2em"}>
            <Flex
              w={"90%"}
              h={{ base: "auto", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              // role="group"
            >
              {advantageList.map((item) => (
                <Avantage
                  key={item.id}
                  adavantageItem={item}
                  colorScheme={colorScheme}
                />
              ))}
            </Flex>
          </Center>

          {/* fonctionalites */}
          {/* <Heading textAlign={"center"}>Fonctionalités</Heading>
          <Text
            textAlign={"center"}
            w={{ base: "100%", md: "60%" }}
            color={"#778da9"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            sint nesciunt, vitae dicta quasi non, iure tempore vel deserunt
            eaque quod ullam ipsum accusantium porro suscipit omnis id
            praesentium facere?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci sint nesciunt, vitae dicta quasi non,
            iure tempore vel deserunt eaque quod ullam ipsum accusantium porro
            suscipit omnis id praesentium facere?
          </Text>
          <Center w={"100%"} h={{ base: "auto", md: "30vh" }} mt={"2em"}>
            <Flex
              w={"90%"}
              h={{ base: "auto", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-around"}
              role="group"
            >
              {fonctionList.map((item) => (
                <Fonctions
                  key={item.id}
                  fonctionsItems={item}
                  colorScheme={colorScheme}
                />
              ))}
            </Flex>
          </Center> */}
        </Center>

        {/* a propos de nous  */}
        <Center w={"100%"} h={{ base: "100vh", md: "90vh" }}>
          <Center
            w={{ base: "90%", md: "70%" }}
            h={{ base: "90%", md: "70%" }}
            // mt={"2em"}
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            // borderRadius={"3xl"}
            // role="group"
            // _hover={{ bg: "#ade8f427" }}
          >
            <Center w={"80%"} h={"90%"} flexDirection={"column"}>
              <Box w={"100%"} mb={"2em"}>
                <Heading
                  color={colorScheme}
                  // transform={{ base: "translateX(0%)", md: "translateX(30%)" }}
                  textAlign={"center"}
                  // _groupHover={{
                  //   transform: {
                  //     base: "translateX(0%)",
                  //     md: "translateX(0%)",
                  //   },
                  //   transition: "1s",
                  // }}
                >
                  A propos de nous
                </Heading>
              </Box>
              <Stack
                direction={{ base: "column", md: "row" }}
                textAlign={"justify"}
                w={"100%"}
              >
                <Box
                  w={{ base: "100%", md: "50%" }}
                  h={{ base: "auto", md: "100%" }}
                  transform={{ base: "translateY(0%)", md: "translateY(15%)" }}
                  // _groupHover={{
                  //   transform: "translateY(0%)",
                  //   transition: "1s",
                  //   fontStyle: "italic",
                  // }}
                >
                  <Text>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum natus quis commodi voluptatum. Laboriosam fugiat
                    numquam, maxime sed placeat natus iure. Quo repudiandae nisi
                    beatae veniam explicabo sequi consectetur magnam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nam
                    inventore, alias possimus impedit corporis reprehenderit
                    minima voluptas? Expedita ipsum officia asperiores tempore
                    quidem voluptatem esse, iste enim labore vitae iusto?
                  </Text>
                </Box>
                <Box
                  w={{ base: "100%", md: "50%" }}
                  h={{ base: "auto", md: "100%" }}
                  transform={{ base: "translateY(0%)", md: "translateY(15%)" }}
                  // _groupHover={{
                  //   transform: "translateY(0%)",
                  //   transition: "1s",
                  //   fontStyle: "italic",
                  // }}
                >
                  <Text>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum natus quis commodi voluptatum. Laboriosam fugiat
                    numquam, maxime sed placeat natus iure. Quo repudiandae nisi
                    beatae veniam explicabo sequi consectetur magnam.
                  </Text>
                </Box>
              </Stack>
            </Center>
          </Center>
        </Center>

        {/* footer  */}
        <Center
          w={"100%"}
          h={"50vh"}
          bg={colorPallete.black}
          flexDirection={"column"}
        >
          <Heading color={colorScheme}>RMY</Heading>
          <Box w={{ base: "90%", md: "80%" }} h={"auto"}>
            <Text color={colorPallete.white} textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquam deserunt, vitae consequatur nostrum nisi exercitationem
              temporibus, cupiditate itaque necessitatibus explicabo ex omnis
              tenetur asperiores voluptatum autem dolorum amet numquam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              commodi accusantium quibusdam excepturi distinctio quo deleniti
              similique earum. Temporibus quisquam quidem placeat ab vitae
              similique? Dolore inventore nulla possimus tempora.
            </Text>
          </Box>
          <Link
            href="#"
            color={colorScheme}
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
            isExternal
          >
            ©By SOGEL AFRIK
          </Link>
        </Center>
      </Box>
    </>
  );
}
