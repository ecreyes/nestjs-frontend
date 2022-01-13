import { Flex, Center, Box, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ButtonBack from "../components/ButtonBack"
import ButtonRokket from "../components/ButtonRokket"
import { useLogin } from "../hooks/login-hook"
import MainLayout from "../layouts/MainLayout"
import Router from 'next/router'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { makeLogin, result } = useLogin()
    const { data, loading, error } = result

    useEffect(()=> {
        if(data?.login?.token){
            localStorage.setItem('token',data.login.token)
            Router.push('/dashboard')
        }
    },[data])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginInput = {
            email,
            password
        }
        makeLogin({
            variables: {
                input: loginInput
            }
        })

    }

    return (
        <MainLayout>
            <ButtonBack></ButtonBack>
            <Flex
                height={'100%'}
                direction='column'
                paddingX={50}
                paddingY={3}
                justify='space-evenly'
            >
                <Center>
                    <Heading as='h1' marginTop={[null, -8]}>Iniciar sesión</Heading>
                </Center>
                <Box>
                    <FormControl marginBottom={4} isRequired isDisabled={loading}>
                        <FormLabel htmlFor='email'>Correo:</FormLabel>
                        <Input id='email' type='email' onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl isRequired isDisabled={loading}>
                        <FormLabel htmlFor='password'>Contraseña:</FormLabel>
                        <Input id='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                </Box>
                <ButtonRokket mt={[null, 2]} onClick={handleSubmit} isLoading={loading} loadingText='Cargando...' isDisabled={loading}>Continuar</ButtonRokket>
            </Flex>
        </MainLayout>
    )
}

export default Login