import { Box, Heading, VStack, Text, Center } from "@chakra-ui/react";
import Btn from "../Shared/Btn";
import Highlighted from "../Shared/Highlighted";
import { ArrowUpIcon } from "@chakra-ui/icons";
function Contact() {
  return (
    <Box p='16px' bgColor='var(--primary)'>
      <VStack gap='40px' pb='160px'>
        <Heading lineHeight='taller' textAlign='center' mt='120px'>
          Ready to <Highlighted>level up</Highlighted> your marketing without
          breaking a sweat?
          <br />
          Let the <Highlighted>copy </Highlighted> do the{" "}
          <Highlighted> heavy lifting</Highlighted>
        </Heading>
        <Btn>Let jel do the copy</Btn>
      </VStack>
      <Text>&copy; JmgWrites.com</Text>
      <Center>
        <Text
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          cursor='pointer'
        >
          Back to top <ArrowUpIcon />
        </Text>
      </Center>
    </Box>
  );
}

export default Contact;
