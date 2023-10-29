import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
function ClientsMarquee() {
  const clients = [
    "bonsai.webp",
    "bruteForce.png",
    "buzzbud.png",
    "Cru.png",
    "dnd.jpg",
    "gassy.png",
    "homi.png",
    "lavish.webp",
    "nola.webp",
    "realTakai.png",
    "sd.png",
    "supervibe.webp",
  ];
  return (
    <Box textAlign='center' mt='120px'>
      <Heading textAlign='center' fontWeight='semibold' mb='24px'>
        Clients
      </Heading>
      <Text mb='40px' maxW='600px' mx='auto' opacity='.6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
        optio ad dignissimos asperiores id vel mollitia beatae
      </Text>
      <Marquee gradient autoFill>
        {clients.map((client) => (
          <Image mx='40px' w='80px' src={`/client-logos/${client}`} />
        ))}
      </Marquee>
    </Box>
  );
}

export default ClientsMarquee;
