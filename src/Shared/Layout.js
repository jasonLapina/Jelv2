import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Box mx='auto' maxW='var(--maxW)' p='40px 16px'>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
