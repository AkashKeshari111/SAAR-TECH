import React from 'react'
import { Button,ButtonProps , Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const Theme = (ButtonProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex h="24px" justifyContent="center" alignItems="center">
    <Button
    border={"none"}
    background={"none"}
    _hoverColor={{background:"none"}}
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: 'none',background:"none" }}
      w="fit-content"
      {...ButtonProps}>
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  </Flex>
);
}

export default Theme