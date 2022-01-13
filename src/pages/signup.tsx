import { NextPage } from "next"
import {
    Box, Flex, FormControl,
    FormLabel, Input, Center,
    Heading, Alert, AlertIcon,
    AlertTitle, AlertDescription,
} from '@chakra-ui/react'
import ButtonRokket from "../components/ButtonRokket"
import { useEffect, useState } from "react"
import { useSignUp } from "../hooks/signup-hook"
import { ApolloError } from "@apollo/client"


const SignUp: NextPage = () => {
    const { makeSignUp, result } = useSignUp()
    const { data, loading, error} = result
    const [showAlert, setShowAlert] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(()=>{
        setShowAlert(false)
        if(data){
            console.log({data})
        }
        if(error){
            handleErrorMsg(error)
        }
    },[data, error, loading])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const signUpInput = {
           name: username,
           email,
           password
        }
        makeSignUp({
            variables: {
              input: signUpInput
            }
        })
    }

    const handleErrorMsg = (error:ApolloError) => {
        setShowAlert(true)
        const msg = error.message.toLowerCase()
        if(msg.includes('bad')){
            setErrorMsg('Ocurrió un problema al intentar registarse')
        }
        if(msg.includes('email')){
            setErrorMsg('El email ya se encuentra en uso.')
        }
    }


    return (
        <Flex justify="center" align='center' height='100vh' bgGradient='linear(to-br, #614ae0, #9080e9)'>
            <Flex direction={'column'} padding={[null,4]} boxShadow={[null,'md']} borderRadius={[null, 8]} width={['100%', 'md']} height={['100vh', '90vh']} bg='white'>
                {showAlert && <Alert status='error' my={4} variant='top-accent'>
                    <AlertIcon />
                    <Flex direction={'column'}>
                        <AlertTitle mr={2}>Error:</AlertTitle>
                        <AlertDescription>{errorMsg}</AlertDescription>
                    </Flex>
                </Alert>
                }
                <Flex
                    height={'100%'}
                    direction='column'
                    paddingX={50}
                    paddingY={3}
                    justify='space-evenly'
                >
                    <Center>
                        <Heading as='h1' size={'md'} marginTop={[null,-8]}>Bienvenid@!</Heading>
                    </Center>
                    <Box>
                        <FormControl marginBottom={4} isRequired isDisabled={loading}>
                            <FormLabel htmlFor='username'>Nombre de usuario:</FormLabel>
                            <Input id='username' type='text' onChange={(e) => setUsername(e.target.value)} />
                        </FormControl>
                        <FormControl marginBottom={4} isRequired isDisabled={loading}>
                            <FormLabel htmlFor='email'>Correo:</FormLabel>
                            <Input id='email' type='email' onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired isDisabled={loading}>
                            <FormLabel htmlFor='password'>Contraseña:</FormLabel>
                            <Input id='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                    </Box>
                    <ButtonRokket mt={[null,2]} onClick={handleSubmit} isLoading={loading} loadingText='Cargando...' isDisabled={loading}>Registrarme</ButtonRokket>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SignUp