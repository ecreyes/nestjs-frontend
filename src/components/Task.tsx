import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Flex, Text, Badge } from "@chakra-ui/react"
import { useDeleteTask } from "../hooks/tasks-hook"
import TaskModal from "./TaskModal"

const Task: React.FC<{ id: string, name: string, completed: boolean }> = ({ id, name, completed }) => {
    const { makeDelete, result } = useDeleteTask()
    const handleDelete = () => {
        makeDelete({
            variables: {
                id
            }
        })
    }

    const getTask = () => {
        return {
            id,
            name,
            completed
        }
    }

    return (
        <Flex flexDirection={'row'} justify={'space-between'} shadow={'md'} minH={20} marginX={2} my={4}>
            <Flex flexDirection={'column'} justify={'space-evenly'} align={'baseline'} ml={2}>
                <Text fontSize='md' fontWeight={'bold'} textTransform={'uppercase'}>{name}</Text>
                {completed && <Badge colorScheme='green' my={2} >Completada</Badge>}
                {!completed && <Badge my={2} >Por hacer</Badge>}

            </Flex>
            <Flex direction={'column'} justify={'space-evenly'} mx={4}>
                <TaskModal type="edit" task={getTask()}></TaskModal>
                <DeleteIcon color='red' onClick={handleDelete}/>
            </Flex>
        </Flex>
    )
}

export default Task