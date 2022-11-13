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

export default function UserProfile() {
  const [formData, setFormData] = useState({
      password: "",
    name: "",
  });

  const token = useSelector((state) => state.AuthReducer.token);
  const userId = useSelector((state) => state.AuthReducer.userId);

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
      password: "",
    });
  };

  const handleUpdate = (userId) => {
    if (formData.password.length < 8 || formData.password === "") {
      alert("Week Password! Please fill 8 or more digits");
      return false;
    }
    axios
      .patch(`http://localhost:8080/auth/${userId}`, formData, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
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
          User Profile Edit
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
              onClick={() => handleUpdate(formData.AdminId)}
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
