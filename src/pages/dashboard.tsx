import { NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Router from 'next/router'
import Header from "../components/Header";
import { Box, Flex, Text, Badge } from "@chakra-ui/react";

const Dashboard: NextPage = () => {

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if(!token){
            Router.push('/')
        }
    },[])

    return (
        <>
            <MainLayout>
                <Header></Header>
                <Box height={'100%'} mt={2} overflowY={'auto'} scrollBehavior={'auto'}>
                    <Flex flexDirection={'row'} justify={'space-between'} shadow={'md'} minH={20} marginX={2} my={4}>
                        <Flex flexDirection={'column'} justify={'space-evenly'} align={'baseline'} ml={2}>
                            <Text fontSize='md' fontWeight={'bold'} textTransform={'uppercase'}>Nombre de la tarea</Text>
                            <Badge colorScheme='green' my={2} >Completada</Badge>
                        </Flex>
                        <Flex direction={'column'} justify={'space-evenly'} ml={4}>
                            <div>update</div>
                            <div>delete</div>
                        </Flex>
                    </Flex>
                </Box>
            </MainLayout>
        </>
    )
}

export default Dashboard