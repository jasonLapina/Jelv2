import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import Highlighted from "./Highlighted";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navs = [
    {
      text: "about",
    },
    {
      text: "portfolio",
      type: "page",
    },
  ];

  return (
    <Box
      pos='sticky'
      top='0'
      zIndex={99}
      p='8px'
      display='flex'
      alignContent='center'
      alignItems='center'
      backdropFilter='auto'
      backdropBlur='10px'
    >
      <HamburgerIcon onClick={onOpen} boxSize='32px' />
      <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor='var(--primary)'>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text as={Link} to='/' fontSize='24px' textShadow='2px 2px yellow'>
              Jel.
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <HStack justifyContent='space-around'>
              {navs.map((n) => (
                <Button
                  as={HashLink}
                  to={n.type !== "page" ? `/#${n.text}` : `/${n.text}`}
                  variant='link'
                  key={n.text}
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <Highlighted>{n.text}</Highlighted>
                </Button>
              ))}
              <Button
                onClick={() => {
                  const scrollTo = document.getElementById("contact");
                  const offset = 40;
                  const scrollPos = scrollTo.offsetTop - offset;
                  window.scrollTo({
                    top: scrollPos,
                    behavior: "smooth",
                  });
                }}
                variant='link'
              >
                <Highlighted>contact</Highlighted>
              </Button>
            </HStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
