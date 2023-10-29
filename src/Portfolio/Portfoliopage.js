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
} from "@chakra-ui/react";
import { useState } from "react";
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
      <Modal size={modalSize} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={`/${modalImg}.jpg`} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box pb='80px'>
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
            gridTemplateColumns='repeat(auto-fit,minmax(400px,1fr))'
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
                boxShadow='8px 8px yellow'
                pos='relative'
                role='group'
              >
                <Image
                  src={`/${s}.jpg`}
                  _groupHover={{ filter: "brightness(.4)" }}
                  transition='all .3s'
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
            gridTemplateColumns='1fr 1fr'
            justifyItems='center'
            justifyContent='center'
            mt='40px'
            px='120px'
          >
            {results.map((r) => (
              <Box
                cursor='pointer'
                maxH='600px'
                overflow='hidden'
                borderRadius='10px'
                maxW='400px'
                key={r}
                onClick={() => {
                  setModalSize("5xl");
                  setModalImg(r);
                  onOpen();
                }}
                boxShadow='8px 8px yellow'
                pos='relative'
                role='group'
              >
                <Image
                  src={`/${r}.jpg`}
                  _groupHover={{ filter: "brightness(.4)" }}
                  transition='all .3s'
                  h='100%'
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
      </Box>
    </>
  );
}

export default Portfoliopage;
