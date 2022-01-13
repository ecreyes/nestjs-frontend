import { NextPage } from "next"
import {
    Box, Flex, FormControl,
    FormLabel, Input, Center,
    Heading
  } from '@chakra-ui/react'
import ButtonRokket from "../components/ButtonRokket"

const SignUp: NextPage = () => {
    return (
        <Flex justify="center" align='center' height='100vh' bg='#614ae0'>
            <Flex 
            borderRadius={[null, 4]}
            direction='column'
            paddingX={50} 
            paddingY={10}
            bg='white' 
            justify='space-evenly'
            height={['100vh', '90vh']} 
            width={['100%', 'md']}>
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
    )
}

export default SignUp