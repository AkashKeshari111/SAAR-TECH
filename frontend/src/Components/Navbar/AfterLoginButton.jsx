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
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaUserCog,
  FaHeartbeat,
  FaOpencart,
  FaDatabase
} from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../Redux/AuthReducer/action";


export default function AfterLoginButton() {
  const dispatch = useDispatch();
   let name = useSelector((state) => state.AuthReducer.name);
  const role = useSelector((state) => state.AuthReducer.role);
  const navigate = useNavigate();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // const placeorder = useSelector((state) => state.AppReducer.placeOrder);
  const handleLogout = () => {
    dispatch(logout()).then((res)=>
    { 
    navigate("/")
    }    
    )
  }

 
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
            textOverflow= "ellipsis"
            textAlign="left"
            _hover={{
              background: "white",
              color: "#ffda00",
            }}
            color={"black"}
          >
            {name}
            <IoMdArrowDropdown />
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


             <Link to="/adminHome" > <Button
              
              display={role === "Admin" ? "flex" : "none"}
              w="194px"
              variant="ghost"
              rightIcon={<FaDatabase />}
              justifyContent="space-between"
              fontWeight="normal"
              colorScheme="red"
              fontSize="sm"
            >
              List Products
            </Button></Link>

              <Button
                w="194px"
                variant="ghost"
                rightIcon={<FaHeartbeat />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                My Favourites
              </Button>
              <Link to='/placeorder' >
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<FaOpencart />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  colorScheme="red"
                  fontSize="sm"
                >
                  My Orders
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
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
