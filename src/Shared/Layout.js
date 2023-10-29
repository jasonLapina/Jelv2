import { Box, useMediaQuery } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import MobileNav from "./MobileNav";
function Layout() {
  const { pathname } = useLocation();
  const [isLg] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      {isLg && <Navbar />}
      {!isLg && <MobileNav />}
      <Box mx='auto' maxW='var(--maxW)' p='40px 16px'>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
