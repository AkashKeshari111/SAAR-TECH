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
  Select,
  Text,

  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const AdminRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminSignupData, setAdminSignupData] = useState({
    name: "",
    email: "",
    password: "",
    country_code: "",
    mobile: "",
    gender: "",
    gst_number: "",
    company_name: "",
  });

  console.log(adminSignupData);

  const handleChange = (e) => {
const { name, value } = e.target;
    setAdminSignupData({
      ...adminSignupData,
      [name]: value,
    });
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
                    value={adminSignupData.name}
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
                    value={adminSignupData.email}
                    id="email"
                    isRequired
                    type="email"
                  />

                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      onChange={handleChange}
                      name="password"
                      value={adminSignupData.password}
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

                  <FormLabel>Country_Code</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="country_code"
                    value={adminSignupData.country_code}
                    id="country_code"
                    type="number"
                  />

                  <FormLabel>Mobile</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="mobile"
                    value={adminSignupData.mobile}
                    id="mobile"
                    type="number"
                  />

                  <FormLabel>Gender</FormLabel>
                  <Select
                    id="gender"
                    name="gender"
                    value={adminSignupData.gender}
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </Select>

                  <FormLabel>GST Number</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="gst_number"
                    value={adminSignupData.gst_number}
                    id="gst_number"
                    type="number"
                  />

                  <FormLabel>Company Name</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="company_name"
                    value={adminSignupData.company_name}
                    id="company_name"
                    type="text"
                  />

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


export default AdminRegister