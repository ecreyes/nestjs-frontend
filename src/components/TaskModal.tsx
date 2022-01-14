import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    Switch
} from '@chakra-ui/react'
import { AddIcon, EditIcon } from "@chakra-ui/icons"
import ButtonRokket from './ButtonRokket'
import { useEffect, useState } from 'react'
import { useMakeTask } from '../hooks/tasks-hook'

interface Task { id: string, name: string, completed: boolean }

const TaskModal: React.FC<{ type: 'create' | 'edit', task?: Task }> = ({ type, task }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState(type==='create'? '' : task?.name)
    const [completed, setCompleted] = useState(type==='create'? false : task?.completed)
    const { makeTask, result } = useMakeTask(type)
    const { data, loading, error } = result

    useEffect(()=> {
        if(data){
            if(type === 'create'){
                setName('')
                setCompleted(false)
            }
            onClose()
        }
    },[data])

    const getTitle = () => {
        return type === 'create' ? 'Crear tarea' : 'Editar tarea'
    }

    const getTextButton = () => {
        return type === 'create' ? 'Crear' : 'Editar'
    }

    const getTextSwitch = () => {
        return completed ? 'Completada' : 'Por hacer'
    }

    const getBody = () => {
        const input = {
            name,
            completed
        }
        if(type==='create'){
            return {
                input
            }
        }
        if(type === 'edit') {
            return {
                id: task?.id,
                input
            }
        }
    }

    const handleClick = () => {
        makeTask({
            variables: getBody()
        })
    }

    return (
        <>
            {type === 'create' ?
                <IconButton bg={'#614ae0'} color='white' borderRadius={100} position={'absolute'} bottom={0} right={0} my={2} mr={2} onClick={onOpen} aria-label='add task' icon={<AddIcon />} />
                :
                <EditIcon color='#614ae0' onClick={onOpen} />
            }


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{getTitle()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl marginBottom={4} isRequired isDisabled={loading}>
                            <FormLabel htmlFor='name'>Nombre de tarea</FormLabel>
                            <Input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        {type === 'edit' &&
                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='completed' mb='0'>
                                    {getTextSwitch()}
                                </FormLabel>
                                <Switch id='completed' isChecked={completed} onChange={() => setCompleted(!completed)} />
                            </FormControl>
                        }

                    </ModalBody>

                    <ModalFooter>
                        <ButtonRokket onClick={handleClick}>{getTextButton()}</ButtonRokket>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TaskModal