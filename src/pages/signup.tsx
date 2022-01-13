import { NextPage } from "next"
import {
    Box, Flex, FormControl,
    FormLabel, Input, Center,
    Heading, Alert, AlertIcon,
    AlertTitle, AlertDescription,
} from '@chakra-ui/react'
import ButtonRokket from "../components/ButtonRokket"

const SignUp: NextPage = () => {
    return (
        <Flex justify="center" align='center' height='100vh' bg='#614ae0'>
            <Flex direction={'column'} borderRadius={[null, 4]} width={['100%', 'md']} height={['100vh', '90vh']} bg='white'>
                <Alert status='error' my={4} variant='top-accent'>
                    <AlertIcon />
                    <Flex direction={'column'}>
                        <AlertTitle mr={2}>Error:</AlertTitle>
                        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                    </Flex>
                </Alert>
                <Flex
                    height={'100%'}
                    direction='column'
                    paddingX={50}
                    paddingY={3}
                    justify='space-evenly'
                >
                    <Center>
                        <Heading as='h1' size={'md'}>Bienvenid@!</Heading>
                    </Center>
                    <Box>
                        <FormControl marginBottom={4}>
                            <FormLabel htmlFor='username'>Nombre de usuario:</FormLabel>
                            <Input id='username' type='text' />
                        </FormControl>
                        <FormControl marginBottom={4}>
                            <FormLabel htmlFor='email'>Correo:</FormLabel>
                            <Input id='email' type='email' />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='password'>Contraseña:</FormLabel>
                            <Input id='password' type='password' />
                        </FormControl>
                    </Box>
                    <ButtonRokket>Registrarme</ButtonRokket>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SignUp