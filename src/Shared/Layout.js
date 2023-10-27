import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
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
