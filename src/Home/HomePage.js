import {
  Box,
  Grid,
  Heading,
  Text,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import Btn from "../Shared/Btn";
import Highlighted from "../Shared/Highlighted";
import Contact from "./Contact";
import About from "./About";
import Samples from "../Portfolio/Samples";
function HomePage() {
  return (
    <VStack gap='120px' align='normal'>
      <VStack
        gap='24px'
        align='normal'
        bgColor='var(--primary)'
        p='16px'
        pl={{ base: "16px", lg: "80px" }}
      >
        <Grid
          pt='120px'
          pb='80px'
          alignItems='center'
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          rowGap='64px'
          columnGap='32px'
          justifyItems={{ base: "center", lg: "normal" }}
        >
          <Box>
            <Heading mb='24px'>
              Hi there, it's Jel. <br />
              I’m here to put <Highlighted>words to work.</Highlighted>
            </Heading>
            <Text lineHeight='taller' maxW='600px' mb='40px' opacity='.6'>
              I help e-commerce brands turn subscribers into paying customers
              and brand loyalists by writing copy that is congruent with their
              branding, conversion-focused, and community-driven.
            </Text>
            <Box mx='auto' w={{ base: "fit-content", lg: "full" }}>
              <Btn>See my work</Btn>
            </Box>
          </Box>
          <Image
            maxW={{ base: "240px", lg: "full" }}
            justifySelf='center'
            alignSelf='center'
            src='/hero.svg'
          />
        </Grid>
      </VStack>
      <About />
      <Samples />
      <Contact />
    </VStack>
  );
}

export default HomePage;
