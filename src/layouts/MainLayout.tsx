import {
    Flex,
} from '@chakra-ui/react'
const MainLayout: React.FC = ({children}) => {
    return (
        <Flex justify="center" align='center' height='100vh' bgGradient='linear(to-br, #614ae0, #9080e9)'>
        <Flex position={'relative'} overflow={'hidden'} direction={'column'} boxShadow={[null,'md']} borderRadius={[null, 8]} width={['100%', 'md']} height={['100vh', '90vh']} bg='white'>
            {children}
        </Flex>
    </Flex>
    )
}

export default MainLayout