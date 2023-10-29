import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import ClientsMarquee from "./ClientsMarquee";
import { Link } from "react-router-dom";
import Contact from "../Home/Contact";

function Portfoliopage() {
  const [modalImg, setModalImg] = useState("");
  const [modalSize, setModalSize] = useState("xl");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const samples = [
    "Apparel",
    "Bedbugs",
    "BuzzBud",
    "fruits",
    "Gassy",
    "SweetDreams",
  ];
  const results = [
    "results/Nola",
    "results/RealTakai",
    "results/BuzzBud",
    "results/SuperVibe",
  ];
  return (
    <>
      <Modal isCentered size={modalSize} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={`/${modalImg}.jpg`} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box>
        <Text opacity='.6' fontSize='24px' mb='40px' textAlign='center'>
          Portfolio showcase
        </Text>
        <Box textAlign='center'>
          <Heading fontWeight='semibold' mb='24px'>
            Samples
          </Heading>
          <Text maxW='600px' mx='auto' opacity='.6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, optio ad dignissimos asperiores id vel mollitia beatae
          </Text>

          <Grid
            columnGap='16px'
            rowGap='32px'
            justifyItems={{ base: "center", lg: "normal" }}
            gridTemplateColumns={{
              base: "1fr",
              lg: "repeat(auto-fit,minmax(400px,1fr))",
            }}
            mt='40px'
          >
            {samples.map((s) => (
              <Box
                cursor='pointer'
                maxH='600px'
                overflow='hidden'
                borderRadius='10px'
                maxW='400px'
                key={s}
                onClick={() => {
                  setModalSize("xl");
                  setModalImg(s);
                  onOpen();
                }}
                boxShadow='0px 4px 12px #333333'
                pos='relative'
                role='group'
              >
                <Image
                  src={`/${s}.jpg`}
                  _groupHover={{ filter: "brightness(.4)" }}
                  transition='all .3s'
                  loading='lazy'
                />
                <Button
                  pos='absolute'
                  top='120%'
                  left='50%'
                  transform='translate(-50%,-50%)'
                  variant='unstyled'
                  color='white'
                  fontWeight='thin'
                  fontSize='32px'
                  opacity={0}
                  _groupHover={{
                    opacity: 1,
                    top: "50%",
                  }}
                  transition='all .3s'
                >
                  click to view
                </Button>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box mt='80px' textAlign='center'>
          <Heading fontWeight='semibold' mb='24px'>
            Results
          </Heading>
          <Text maxW='600px' mx='auto' opacity='.6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, optio ad dignissimos asperiores id vel mollitia beatae
          </Text>

          <Grid
            columnGap='16px'
            rowGap='32px'
            gridTemplateColumns={{ lg: "repeat(4,1fr)", base: "1fr" }}
            justifyItems='center'
            justifyContent='center'
            mt='40px'
          >
            {results.map((r) => (
              <Box
                cursor='pointer'
                overflow='hidden'
                borderRadius='10px'
                maxW='400px'
                key={r}
                onClick={() => {
                  setModalSize("5xl");
                  setModalImg(r);
                  onOpen();
                }}
                pos='relative'
                role='group'
                boxShadow='0px 4px 12px #333333'
              >
                <Image
                  src={`/${r}.jpg`}
                  _groupHover={{ filter: "brightness(.4)" }}
                  transition='all .3s'
                  h='100%'
                  loading='lazy'
                />
                <Button
                  pos='absolute'
                  top='120%'
                  left='50%'
                  transform='translate(-50%,-50%)'
                  variant='unstyled'
                  color='white'
                  fontWeight='thin'
                  fontSize='32px'
                  opacity={0}
                  transition='all .3s'
                  _groupHover={{
                    opacity: 1,
                    top: "50%",
                  }}
                >
                  click to view
                </Button>
              </Box>
            ))}
          </Grid>
        </Box>
        <ClientsMarquee />
        <Contact />
      </Box>
    </>
  );
}

export default Portfoliopage;
