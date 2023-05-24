import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export const ToggleDark = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Theme
      </Button>
    </>
  );
};
