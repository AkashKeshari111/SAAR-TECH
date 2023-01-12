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
Select
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userSignupData, setUserSignupData] = useState({
    name: "",
    email: "",
    password: "",
    country_code: "",
    mobile: "",
    gender: ""
  
  });

  // console.log(userSignupData);

  const handleChange = (e) => {

    
    const { name, value } = e.target;
    setUserSignupData({
      ...userSignupData,
      [name]: value,
    });
  };



  const handleSubmit = () => {

    if(userSignupData.password.length<8 || userSignupData.password===""){
      alert("Week Password please fill 8 or more digits")
      return false
     }
     if(userSignupData.mobile.length===0 || userSignupData.mobile.length===10){
      
     }
     else{
      alert("Invalid mobile number")
      return false
     }
     



    let userData = {
      name: userSignupData.name,
      email: userSignupData.email,
      password: userSignupData.password,
      country_code: userSignupData.country_code,
      mobile: userSignupData.mobile,
      gender: userSignupData.gender
    };

    return axios
      .post(`https://saartech-production.up.railway.app/auth/register`, userData)
      .then(res => {
        console.log(res);
        alert('Registrations successfully!');
        navigate('/UserLogin');
      })
      .catch(error =>{
        if(error.response.status===403){
          alert(error.response.data.msg)
        }
        else{
          alert(error)
        }
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
                    value={userSignupData.email.toLowerCase()}
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

                  <FormLabel>Country_Code</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="country_code"
                    value={userSignupData.country_code}
                    id="country_code"
                    type="number"
                  />

                  <FormLabel>Mobile</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="mobile"
                    value={userSignupData.mobile}
                    id="mobile"
                    type="number"
                  />

                  <FormLabel>Gender</FormLabel>
                  <Select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={userSignupData.gender}
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </Select>

                  <Button
                    mt={4}
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