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
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';


const AdminRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  
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

  const handleSubmit = () => {
     if(adminSignupData.password.length<8 || adminSignupData.password===""){
      alert("Week Password please fill 8 or more digits")
      return false
     }

     if(adminSignupData.mobile==""){
      alert("Plesae enter 10 digit mobile number");
      return false;
  }

  if(isNaN(adminSignupData.mobile)){
      alert("Enter only digit")
      return false;
  }
  if(adminSignupData.mobile.length<10){
      alert("Invalid mobile number !")
      return false;
  }
  if(adminSignupData.mobile.length>10){
     alert("Invalid mobile number !")
     return false;
 }
  if((adminSignupData.mobile.charAt(0)!=9) && (adminSignupData.mobile.charAt(0)!=8) && (adminSignupData.mobile.charAt(0)!=7) && (adminSignupData.mobile.charAt(0)!=6)){
      alert("Please enter a valid mobile number");
      return false;
  }


  if(adminSignupData.gst_number==="" || adminSignupData.gst_number.length!=15){
    alert("Please enter the valid 15 digits GST number")
    return false
  }

     return axios
      .post(`https://saartech-production.up.railway.app/auth/admin/register`, adminSignupData)
      .then(res => {
        console.log(res);
        alert(`Registrations successfully! and user Admin ID is ${res.data.AdminId}`);
        navigate('/AdminLogin');
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
            Admin Sign up
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
                    value={adminSignupData.email.toLowerCase()}
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
                      minLength={8}
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
                    minLength={10}
                    maxLength={10}
                  />

                  <FormLabel>Gender</FormLabel>
                  <Select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={adminSignupData.gender}
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

                  <FormLabel>GST Number</FormLabel>
                  <Input
                    height={"35px"}
                    mb="4px"
                    onChange={handleChange}
                    name="gst_number"
                    value={adminSignupData.gst_number}
                    id="gst_number"
                    type="number"
                    minLength={15}
                    maxLength={15}
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