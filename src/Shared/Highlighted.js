import { Text } from "@chakra-ui/react";
function Highlighted(props) {
  return (
    <Text
      display='inline-block'
      bgImage='linear-gradient(transparent 60%, yellow 40%)'
    >
      {props.children}
    </Text>
  );
}

export default Highlighted;
