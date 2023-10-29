import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
function Portfoliopage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const samples = [
    "Apparel",
    "Bedbugs",
    "BuzzBud",
    "fruits",
    "Gassy",
    "SweetDreams",
  ];
  return (
    <>
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
            gridTemplateColumns='repeat(auto-fit,minmax(400px,1fr))'
            mt='40px'
          >
            {samples.map((s) => (
              <Box maxH='600px' overflow='hidden' maxW='400px' key={s}>
                <Image src={`/${s}.jpg`} />
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Portfoliopage;
