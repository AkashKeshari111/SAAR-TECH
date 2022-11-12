import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,

} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userSignupData, setUserSignupData] = useState({
    name: "",
    email: "",
    password: "",
  
  });

  console.log(userSignupData);

  const handleChange = (e) => {

    
    const { name, value } = e.target;
    setUserSignupData({
      ...userSignupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name:name,
      email: email,
      password: password,
    };
    if (email && password) {
      dispatch(userLoginSuccess(payload))
      
    }
  };



  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            User Sign up
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={2}>
            <HStack>
              <Box>
                <FormControl >
                  <FormLabel fontSize={"14px"}>Full Name</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="name"
                    value={userSignupData.name}
                    id="fullName"
                    isRequired
                    type="text"
                  />

                  <FormLabel>Email address</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="email"
                    value={userSignupData.email}
                    id="email"
                    isRequired
                    type="email"
                  />

                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      onChange={handleChange}
                      name="password"
                      value={userSignupData.password}
                      id="password"
                      isRequired
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                 
                  <Button
                  onClick={handleSubmit}
                  type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                 Sign Up
                  </Button>
                </FormControl>

                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                </Stack>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserRegister;
