import Head from "next/head";
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
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faCloud } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-awesome-reveal";

//--------------------------------------------assets------------------------------------------------------------------
const colorPallete = {
  schem: "",
  primary_blue: "#1b263b",
  secondary_blue: "#0077b6",
  white: "#fff",
  black: "#000",
  grey: "rgb(99, 115, 129)",
  light_grey: "#f5f5f5",
  light_blue: "#caf0f8",
};
const colorList = [
  { id: 1, color: "#023e8a" },
  { id: 2, color: "#0096c7" },
  { id: 3, color: "#48cae4" },
  { id: 4, color: "#ff9500" },
  { id: 5, color: "#ffc300" },
  { id: 6, color: "#ef6351" },
  { id: 7, color: "#f38375" },
  { id: 8, color: "#ffe3e0" },
  { id: 9, color: "#c1d3fe" },
  { id: 10, color: "#abc4ff" },
];
// ---------------------------------------------assets--------------------------------------------------------------------------

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
        w={{ base: "100%", md: "100%" }}
        h={{ base: "20em", md: "100%" }}
        mb={{ base: "2em", md: "0em" }}
        borderWidth={"2px"}
        borderColor={colorPallete.white}
        borderRadius={"3xl"}
        role="group"
      >
        <Flex
          alignItems={"start"}
          justifyContent={"center"}
          flexDirection={"column"}
          textAlign={"left"}
          w={"90%"}
          h={"90%"}
        >
          <Text color={colorPallete.white} fontWeight={"bold"}>
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

  const [colorScheme, setColorScheme] =
    useState("#023e8a"); /* la couleur de base */
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
          bgImage={"url(overlay.svg)"}
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
              {/* le texte de la banier  */}
              <Flex
                w={{ base: "100%", sm: "50%" }}
                h={"100%"}
                align={"start"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Fade
                  cascade
                  direction="right"
                  duration={300}
                  triggerOnce={true}
                  className="fadeHeader"
                >
                  {" "}
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
                    color={colorPallete.white}
                    bg={colorScheme}
                    w={"10em"}
                    borderRadius={"5px"}
                    mt={"5"}
                    _hover={{
                      bg: colorScheme,
                      filter: "auto",
                      brightness: "60%",
                    }}
                    rightIcon={<ArrowRightIcon />}
                  >
                    {/* <FontAwesomeIcon icon={faBolt} size="2xs" style={{color: "#ffffff",}} /> */}
                    Demarer
                  </Button>
                </Fade>
                {/* ------------ */}
              </Flex>

              {/* l'immage en fond  */}
              {isLargerThan768 ? (
                <Fade
                  className="fadeBgBanner"
                  direction="left"
                  triggerOnce={true}
                >
                  <Center
                    w={"100%"}
                    h={"100%"}
                    bgImage={"url(hero.png)"}
                    bgSize={"contain"}
                    bgRepeat={"no-repeat"}
                    bgPosition={"center"}
                    filter="auto"
                    brightness="40%"
                  ></Center>
                </Fade>
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
          {/* l'entete du choix de style  */}
          <Fade
            className="fadeCenter"
            cascade
            direction="down"
            triggerOnce={true}
          >
            <Heading color={colorScheme} textAlign={"center"}>
              {"Definissez votre propre style pour l'affichage"}
            </Heading>
            <Text mt={"5"} textAlign={"center"}>
              {"En un clic deffinissez l'affichage"}{" "}
            </Text>
          </Fade>

          <Center w={"100%"} mt={"4em"}>
            <Flex
              w={{ base: "100%", md: "80%" }}
              h={{ base: "auto", md: "70vh" }}
              flexDirection={{ base: "column-reverse", md: "row" }}
            >
              <Center
                w={{ base: "100%", md: "80%" }}
                h={{ base: "50vh", md: "100%" }}
                bgImage={"url(03.png)"}
                bgSize={"contain"}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
              ></Center>

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
              w={{ base: "90%", md: "70%" }}
              h={{ base: "auto", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
            >
              <Fade
                className="fadeCm"
                cascade
                triggerOnce={true}
                direction="up"
              >
                {/* première box  */}
                <Center
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "30em", md: "100%" }}
                  mb={{ base: "2em", md: "0em" }}
                  bg={"rgb(244, 246, 248)"}
                  borderRadius={"15px"}
                  flexDirection={"column"}
                >
                  {/* <Center mb={"2em"}>
                  <FontAwesomeIcon
                    icon={faBoltLightning}
                    size="sm"
                    style={{ color: colorScheme }}
                  />
                </Center> */}

                  <Text fontWeight={"bold"} fontSize={"1.3em"} mb={"2em"}>
                    Bonne Performances
                  </Text>
                  <Text textAlign={"center"} color={"rgb(99, 115, 129)"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nemo suscipit asperiores, officia fugiat ad.
                  </Text>
                </Center>
                {/* deuxieme box  */}
                <Center
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "30em", md: "100%" }}
                  mb={{ base: "2em", md: "0em" }}
                  borderRadius={"15px"}
                  flexDirection={"column"}
                  boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
                >
                  <Center
                    w={"90%"}
                    h={"90%"}
                    borderRadius={"15px"}
                    boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
                    flexDirection={"column"}
                  >
                    {/* <Center mb={"2em"}>
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      style={{ color: "#ffba08" }}
                      size="sm"
                    />
                  </Center> */}
                    <Text fontWeight={"bold"} fontSize={"1.3em"} mb={"2em"}>
                      Bonne Performances
                    </Text>
                    <Text textAlign={"center"} color={"rgb(99, 115, 129)"}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quidem nemo suscipit asperiores, officia fugiat ad.
                    </Text>
                  </Center>
                </Center>
                {/* troisieme box  */}
                <Center
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "30em", md: "100%" }}
                  mb={{ base: "2em", md: "0em" }}
                  bg={"rgb(244, 246, 248)"}
                  borderRadius={"15px"}
                  flexDirection={"column"}
                >
                  {/* <Center mb={"2em"}>
                  <FontAwesomeIcon
                    icon={faCloud}
                    style={{ color: colorScheme }}
                    size="sm"
                  />
                </Center> */}

                  <Text fontWeight={"bold"} fontSize={"1.3em"} mb={"2em"}>
                    Sauvegarde
                  </Text>
                  <Text textAlign={"center"} color={"rgb(99, 115, 129)"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nemo suscipit asperiores, officia fugiat ad.
                  </Text>
                </Center>
                {/* ---------------- */}
              </Fade>
            </Flex>
          </Center>
        </Center>

        {/* nos avantages*/}
        <Center
          w={"100%"}
          h={{ base: "auto", md: "100vh" }}
          flexDirection={"column"}
          bg={colorScheme}
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
            >
              <Fade
                direction="up"
                cascade
                className="fadAdvantage"
                triggerOnce={true}
              >
                {advantageList.map((item) => (
                  <Avantage
                    key={item.id}
                    adavantageItem={item}
                    colorScheme={colorScheme}
                  />
                ))}
              </Fade>
            </Flex>
          </Center>
        </Center>

        {/* a propos de nous  */}
        <Center w={"100%"} h={{ base: "auto", md: "100vh" }} mt={'4em'}>
          <Center
            w={{ base: "90%", md: "90%" }}
            h={{ base: "90%", md: "80%" }}
            bg={colorPallete.white}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Fade
              direction="up"
              cascade
              className="fadAbout"
              triggerOnce={true}
            >
              {/* first box  */}
              <Center
                w={{ base: "100%", md: "100%" }}
                h={{ base: "70vh", md: "100%" }}
                justifyContent={"start"}
                alignItems={"start"}
                flexDirection={"column"}
              >
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                  fontFamily={"'Public Sans', sans-serif"}
                  fontSize={"smaller"}
                  color={colorPallete.grey}
                  letterSpacing={"5px"}
                >
                  {" "}
                  a propos de RMY
                </Text>
                <Heading>Une solution simple et efficace.</Heading>
                <Text color={"rgb(99, 115, 129)"}>
                  Elit aute dolor commodo incididunt irure sint eu fugiat est
                  veniam reprehenderit eu aliqua laborum. Ad amet exercitation
                  fugiat ex cupidatat est elit anim officia et reprehenderit
                  velit. Dolore non consequat magna ut aliquip est aute. Ut nisi
                  commodo est excepteur aliqua. Ex incididunt minim sint eu
                  officia. Ullamco culpa incididunt irure ut irure aute qui
                  sint.Esse elit adipisicing eu officia Lorem culpa et est
                  officia. Exercitation dolore ipsum fugiat commodo aute qui
                  cupidatat quis elit do ullamco labore ad do. Veniam esse sint
                  non incididunt esse ut proident mollit id aute nulla
                  exercitation nisi cupidatat.
                </Text>
              </Center>
              {/* seconde box  */}
              <Center
                w={{ base: "100%", md: "100%" }}
                h={{ base: "70vh", md: "100%" }}
                bgImage={"url(02.png)"}
                bgSize={"contain"}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
              >
                {/* <Image src="02.png" alt="Dan Abramov"  boxSize={'80%'}/> */}
              </Center>
            </Fade>
          </Center>
        </Center>

        {/* footer  */}
        <Center
          w={"100%"}
          h={"50vh"}
          bg={colorPallete.black}
          flexDirection={"column"}
        >
          <Fade className="fadeCenter">
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
          </Fade>
        </Center>
      </Box>
    </>
  );
}
