import {
    Box,
    Heading,
    Flex,
  } from "@chakra-ui/react";
  import { IconButton } from "@chakra-ui/button";
  import {FaSun, FaMoon} from 'react-icons/fa'
  import {useColorMode} from '@chakra-ui/color-mode'
const Header = () =>{
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark'
    return(
        <>
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="orange.500"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"} color="white">PostMan-clone</Heading>
            </Flex>
            <Box mt={{ base: 4, md: 0 }}>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />}  isRound="true" onClick={toggleColorMode}>

                </IconButton>
            </Box>
        </Flex>
        </>
    )
}

export default Header