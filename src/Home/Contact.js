import { Heading, VStack } from "@chakra-ui/react";
import Btn from "../Shared/Btn";
import Highlighted from "../Shared/Highlighted";
function Contact() {
  return (
    <VStack gap='24px' bgColor='var(--primary)' p='16px' pb='160px'>
      <Heading textAlign='center' mt='120px'>
        Ready to level up your marketing without breaking a sweat?
        <br />
        Let the <Highlighted>copy </Highlighted> do the{" "}
        <Highlighted> heavy lifting</Highlighted>
      </Heading>
      <Btn>let jel do the copy</Btn>
    </VStack>
  );
}

export default Contact;
