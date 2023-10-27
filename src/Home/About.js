import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Highlighted from "../Shared/Highlighted";

function About() {
  return (
    <Box>
      <Heading mb='40px'>
        A little about your <Highlighted>Copywriter</Highlighted>
      </Heading>
      <Text maxW='700px' opacity='.7'>
        Over the past year, I've worked with a variety of e-commerce brands
        across industries ranging from{" "}
        <Highlighted> Health and Beauty</Highlighted>,{" "}
        <Highlighted>Apparel and Jewelry</Highlighted> ,{" "}
        <Highlighted>Sporting Goods</Highlighted>,{" "}
        <Highlighted>Food and Beverages </Highlighted>, and more!
      </Text>

      <HStack gap='40px' mt='40px'>
        <Link>
          <Image w='56px' aspectRatio='1/1' src='/gmail.svg' />
        </Link>
        <Link>
          <Image w='56px' aspectRatio='1/1' src='/resume.svg' />
        </Link>
        <Link>
          <Image w='56px' aspectRatio='1/1' src='/linkedin.svg' />
        </Link>
      </HStack>
    </Box>
  );
}

export default About;
