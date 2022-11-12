import React from 'react'
import { Button,ButtonProps , Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const Theme = (ButtonProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: 'none' }}
      w="fit-content"
      {...ButtonProps}>
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  </Flex>
);
}

export default Theme