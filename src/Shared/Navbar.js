import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Highlighted from "./Highlighted";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navs = [
    {
      text: "about",
    },
    {
      text: "portfolio",
      type: "page",
    },
  ];

  const handleHome = () => {
    if (pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box pos='sticky' top='0' h='80px' py='8px' w='100%' zIndex={99}>
      <HStack
        maxW='var(--maxW)'
        mx='auto'
        justifyContent='space-between'
        px='8px'
      >
        <Button
          fontSize='32px'
          variant='unstyled'
          transition='all .3s'
          _hover={{
            textShadow: "4px 4px yellow",
          }}
          backdropFilter='auto'
          backdropBlur='10px'
          px='40px'
          display='flex'
          justifyContent='center'
          borderRadius='10px'
          onClick={handleHome}
        >
          <Text>Jel.</Text>
        </Button>

        <HStack
          borderRadius='20px'
          px='24px'
          backdropFilter='auto'
          backdropBlur='10px'
          gap='24px'
        >
          {navs.map((n) => {
            return (
              <HashLink
                to={n.type !== "page" ? `/#${n.text}` : `/${n.text}`}
                scroll={(el) =>
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                <Button
                  key={n.text}
                  variant='unstyled'
                  transition='all .3s'
                  _hover={{
                    textShadow: "4px 4px yellow",
                  }}
                >
                  <Highlighted>{n.text}</Highlighted>
                </Button>
              </HashLink>
            );
          })}
          <Button
            variant='unstyled'
            transition='all .3s'
            _hover={{
              textShadow: "4px 4px yellow",
            }}
            onClick={() => {
              const scrollTo = document.getElementById("contact");
              const offset = 40;
              const scrollPos = scrollTo.offsetTop - offset;
              window.scrollTo({
                top: scrollPos,
                behavior: "smooth",
              });
            }}
          >
            <Highlighted>contact</Highlighted>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar;
