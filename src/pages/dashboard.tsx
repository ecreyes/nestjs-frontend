import { NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Router from 'next/router'
import Header from "../components/Header";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import Task from '../components/Task'
import { useTasks } from "../hooks/tasks-hook";
import TaskModal from "../components/TaskModal";

const Dashboard: NextPage = () => {
    const {data, loading, error} = useTasks()

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
                <TaskModal type="create"></TaskModal>
                <Box height={'100%'} mt={2} overflowY={'auto'} scrollBehavior={'auto'}>
                    {data?.tasks.length === 0 && 
                        <Alert status='info'>
                          <AlertIcon />
                          No tienes tareas creadas 😭
                        </Alert>
                    }
                    {data?.tasks.length >0 &&
                        data.tasks.map((task: any)=> <Task key={task.id} id={task.id} name={task.name} completed={task.completed}></Task>)
                    }
                </Box>
            </MainLayout>
        </>
    )
}

export default Dashboard