import { Heading, Text, VStack } from "@chakra-ui/react";
import Btn from "../Shared/Btn";
import Highlighted from "../Shared/Highlighted";
import Contact from "./Contact";
function HomePage() {
  return (
    <VStack gap='120px' align='normal'>
      <VStack
        gap='24px'
        align='normal'
        bgColor='var(--primary)'
        p='16px'
        pl='80px'
        pb='160px'
      >
        <Heading mt='120px'>
          Hi there. It's Jel. <br />
          I’m here to put <Highlighted>words to work.</Highlighted>
        </Heading>
        <Text maxW='600px' mb='40px' opacity='.6'>
          I help e-commerce brands turn subscribers into paying customers and
          brand loyalists by writing copy that is congruent with their branding,
          conversion-focused, and community-driven.
        </Text>
        <Btn>see my work</Btn>
      </VStack>
      <Contact />
    </VStack>
  );
}

export default HomePage;
