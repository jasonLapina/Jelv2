import { Heading, Text, VStack } from "@chakra-ui/react";
import Btn from "../Shared/Btn";
import Highlighted from "../Shared/Highlighted";
function HomePage() {
  return (
    <VStack
      gap='24px'
      align='normal'
      bgColor='var(--primary)'
      p='16px'
      pl='80px'
      pb='160px'
    >
      <Heading mt='120px'>
        Hi, It's Jel, Expert <Highlighted>Copywriter</Highlighted> with
        <br />
        an Excellent Track Record of Success
      </Heading>
      <Text maxW='600px' mb='40px'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minima
        sapiente voluptatum placeat voluptates id deserunt necessitatibus eos
        aspernatur, at dolor quas similique nobis commodi! Architecto, tempora
        ut. Natus, error!
      </Text>
      <Btn>see my work</Btn>
    </VStack>
  );
}

export default HomePage;
