import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AdminProfile() {
  const [formData, setFormData] = useState({
    AdminId: "",
    password: "",
    name: "",
  });

  const token = useSelector((state) => state.AuthReducer.token);

  console.log(token);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleReset = () => {
    setFormData({
      ...formData,
      name: "",
      AdminId: "",
      password: "",
    });
  };

const  headers = {
    "token": `Bearer ${token}`
  }
  const handleUpdate = (id) => {
    console.log(id)
    axios
      .patch(
        `http://localhost:8080/auth/admin/${id}`,
        {
          headers: headers
        },
        formData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Admin Profile Edit
        </Heading>

        <FormControl>
          <FormLabel>User name</FormLabel>
          <Input
            name="name"
            onChange={handleChange}
            value={formData.name}
            id="name"
            isRequired
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />

          <FormLabel>Admin Id</FormLabel>
          <Input
            name="AdminId"
            onChange={handleChange}
            value={formData.AdminId}
            id="Adminid"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />

          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            onChange={handleChange}
            value={formData.password}
            id="password"
            isRequired
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />

          <Stack spacing={6} mt="4%" direction={["column", "row"]}>
            <Button
              onClick={handleReset}
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Reset
            </Button>
            <Button
              onClick={()=>handleUpdate(formData.AdminId)}
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Update
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
  );
}
