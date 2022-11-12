import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import {IoMdArrowDropdown}from "react-icons/io"
import { FaUserCog} from "react-icons/fa"

import { BsChatSquareQuote } from "react-icons/bs";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function AfterLoginButton() {
  let name = useSelector((state) => state.AuthReducer.name);
  name = name.charAt(0).toUpperCase() +name.slice(1).toLowerCase()
  return (  
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button
          textStyle="textName"
            w="90px"
            mt="-15px"
            variant="ghost"
            justifyContent="space-between"
            fontWeight="normal"
            fontSize="18px"
           bgColor="white"
        textAlign="left"
           _hover={{
            background: "white",
            color: "#ffda00",
          }}
            color={"black"}
          >
            {name}<IoMdArrowDropdown />
          </Button>
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<FaUserCog />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                {name}
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<FaUserCog />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Purge Redis Cache
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiRestartLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Logout
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
               Logout
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
