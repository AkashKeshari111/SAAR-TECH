import React from "react";
import styles from "./Signinfunction.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
 PopoverBody
} from "@chakra-ui/react";
import { HiOutlineUser } from "react-icons/hi";
import {FcGoogle} from "react-icons/fc"
import { Link } from "react-router-dom";

const Signinfunction = () => {
  const initialFocusRef = React.useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
     
      className={styles.containerSigninfunction}
    >
      <PopoverTrigger  >
        <Button background="white">
          <HiOutlineUser size={"25px"}  background= "rgb(247, 238, 238)"></HiOutlineUser>
          <p style={{ color:"grey" }}>Sign In</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.singBox} maxWidth="270px">
        <PopoverHeader
          pt={4}
          size="sm"
          color="black"
          textAlign={"left"}
          fontWeight="bold"
          border="0"
         
        >
          Welcome to SAAR TECH
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverFooter
          border="0"
          display="flex"
          alignItems="left"
          justifyContent="space-between"
          pb={2}
        >
          {/* <Box fontSize="sm">Step 2 of 4</Box> */}
          <Box>
            {" "}
            <Link to="/UserLogin">  <Button className={styles.loginBtn} width={"90%"} mt="-2%" bgColor="rgb(255,218,0)">
              
              User Login
            </Button></Link>
           
            <Link to="/AdminLogin">   <Button className={styles.loginBtn} width={"90%"} mt="2%" bgColor="rgb(255,218,0)">
           
                 Admin Login
            </Button></Link>
            <PopoverBody color={"grey"} display="flex" ml="18%"><p>or connect via </p><FcGoogle size={"27px"} mt="20%"></FcGoogle> </PopoverBody>
            <Link to="/UserRegister"><Button className={styles.registerBtn} bgColor="#007aff" width={"90%"}>
                User Register

             </Button></Link>
          
             <Link to="/AdminRegister"><Button className={styles.registerBtn} bgColor="#007aff" mt="2%" width={"90%"}>
              Admin Register
              
              </Button></Link>
          </Box>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Signinfunction;
