import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Highlighted from "../Shared/Highlighted";

function About() {
  return (
    <Box id='about'>
      <Grid
        px='40px'
        justifyItems='center'
        rowGap='40px'
        gridTemplateColumns={{ lg: "1fr 1fr", base: "1fr" }}
      >
        <Box>
          <Heading mb='24px'>
            A little about your <Highlighted>Copywriter</Highlighted>
          </Heading>
          <Text lineHeight='taller' maxW='500px' opacity='.7'>
            Over the past year, I've worked with a variety of e-commerce brands
            across industries ranging from{" "}
            <Highlighted> Health and Beauty</Highlighted>,{" "}
            <Highlighted>Apparel and Jewelry</Highlighted> ,{" "}
            <Highlighted>Sporting Goods</Highlighted>,{" "}
            <Highlighted>Food and Beverages </Highlighted>, and more! <br />
          </Text>
          <Text mt='16px' lineHeight='taller' maxW='500px' opacity='.7'>
            With each having their own brand personality and voice. The{" "}
            <Highlighted> only similarity</Highlighted>?{" "}
            <Highlighted>ME</Highlighted> .
          </Text>
          <HStack
            justify={{ base: "center", lg: "normal" }}
            gap='40px'
            mt='40px'
          >
            <Link>
              <Image w='56px' aspectRatio='1/1' src='/gmail.svg' />
            </Link>
            <Link>
              <Image w='56px' aspectRatio='1/1' src='/linkedin.svg' />
            </Link>
            <Link>
              <Image w='56px' aspectRatio='1/1' src='/resume.svg' />
            </Link>
          </HStack>
        </Box>
        <Image
          transform='translateY(-100px)'
          src='/jelanie.png'
          filter='drop-shadow(10px 0 yellow)'
          borderRadius='full'
          justifySelf='center'
        />
      </Grid>
      <Text mt='-40px' textAlign='center' opacity='.6'>
        But that's enough about me...
      </Text>
    </Box>
  );
}

export default About;
