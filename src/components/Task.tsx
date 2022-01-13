import { Flex, Text, Badge } from "@chakra-ui/react"

const Task: React.FC<{id:string,name: string, completed:boolean}> = ({id,name, completed}) => {
    return (
        <Flex key={id} flexDirection={'row'} justify={'space-between'} shadow={'md'} minH={20} marginX={2} my={4}>
            <Flex flexDirection={'column'} justify={'space-evenly'} align={'baseline'} ml={2}>
                <Text fontSize='md' fontWeight={'bold'} textTransform={'uppercase'}>{name}</Text>
                { completed && <Badge colorScheme='green' my={2} >Completada</Badge>}
                { !completed && <Badge my={2} >Por hacer</Badge>}
                
            </Flex>
            <Flex direction={'column'} justify={'space-evenly'} ml={4}>
                <div>update</div>
                <div>delete</div>
            </Flex>
        </Flex>
    )
}

export default Task