import { Box } from "@chakra-ui/react";
function Highlight(props) {
  return (
    <Box display='inline-block' {...props}>
      {props.children}
    </Box>
  );
}

export default Highlight;
