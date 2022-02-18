import {Box, VStack, Heading, Text} from '@chakra-ui/layout'
import {Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { GoogleLogin } from 'react-google-login';

const Register = () =>{
    const SuccessLoginFun = (response) => {
        console.log(response.profileObj);
      }
      const FailureLoginFun = (response) =>{
        console.log(response);

      }
    return(
        <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx='auto' border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
            <VStack spacing={4} align='flex-start' w='full'>
                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading alignSelf="center">Register</Heading>
                    <Text>Enter your Email and Password to Register </Text>
                </VStack>
                <FormControl>
                    <FormLabel>FirstName</FormLabel>
                    <Input rounded='none' variant='filled' />
                </FormControl>
                <FormControl>
                    <FormLabel>LastName</FormLabel>
                    <Input rounded='none' variant='filled' />
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input rounded='none' variant='filled' />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded='none' variant='filled' type='password' />
                </FormControl>
                <Button rounded='none' colorScheme='blue' w={['full', 'auto']} alignSelf='center'>Register</Button>
                <Text alignSelf='center'>Or</Text>
                <VStack alignSelf='center'>
                    <GoogleLogin
                        clientId="931141790875-6fiikm1veiovvho30issi1anlvri4nsu.apps.googleusercontent.com"
                        buttonText="Login From Google"
                        onSuccess={SuccessLoginFun}
                        onFailure={FailureLoginFun}
                        cookiePolicy={'single_host_origin'}
                    />
                </VStack>
            </VStack>

        </Box>
        )
}

export default Register