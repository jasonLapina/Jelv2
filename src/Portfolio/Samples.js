import { Box, Center, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Highlighted from "../Shared/Highlighted";
import Btn from "../Shared/Btn";
import { ArrowForwardIcon } from "@chakra-ui/icons";
function Samples() {
  const samples = [
    { title: "Gassy", text: "", img: "/Gassy" },
    { title: "Sweet Dreams", text: "", img: "/SweetDreams" },
  ];
  return (
    <Box px='80px'>
      <Heading textAlign='center' mb='80px'>
        The Proof is in the <Highlighted>Portfolio</Highlighted>
      </Heading>
      <VStack gap='56px' align='normal' px='80px'>
        {samples.map((s) => {
          return (
            <Grid
              key={s.title}
              overflow='hidden'
              gridTemplateColumns={{ lg: "6fr 4fr", base: "1fr" }}
            >
              <Box justifySelf='center'>
                <Text fontSize='32px' mb='24px'>
                  {s.title}
                </Text>
                <Text mb='40px' opacity='.6' maxW='500px'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                  aliquam deserunt, repellendus illo saepe maiores veniam ab
                  eveniet optio ut deleniti architecto, nulla dignissimos ipsam
                  corporis facere enim inventore impedit!
                </Text>
              </Box>
              <Box
                h='520px'
                w='100%'
                bgImage={`url(${s.img + ".jpg"})`}
                bgPos='center'
                bgSize='cover'
              />
            </Grid>
          );
        })}
      </VStack>
      <Center mt='56px'>
        <Btn>
          View my portfolio <ArrowForwardIcon />
        </Btn>
      </Center>
    </Box>
  );
}

export default Samples;
