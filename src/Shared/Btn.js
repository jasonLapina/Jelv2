import { Box, Button } from "@chakra-ui/react";
function Btn(props) {
  return (
    <Box
      cursor='pointer'
      w='fit-content'
      role='group'
      pos='relative'
      {...props}
    >
      <Button
        bgColor='black'
        color='var(--primary)'
        variant='unstyled'
        pos='relative'
        px='32px'
        py='24px'
        borderRadius='none'
        display='flex'
        alignContent='center'
        w='fit-content'
        transition='all .3s'
        _groupHover={{
          transform: "translate(8px,8px)",
        }}
      >
        {props.children}
      </Button>
      <Box
        right='-8px'
        bottom='-8px'
        border='solid 2px black'
        h='100%'
        w='100%'
        pos='absolute'
        // zIndex={-1}
      />
    </Box>
  );
}

export default Btn;
