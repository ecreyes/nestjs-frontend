import { Button } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

const ButtonRokket = chakra(Button,{
    baseStyle: {
        backgroundColor: '#614ae0',
        color: 'white',
        paddingY: 2,
        paddingX: 4,
        _hover: {
            backgroundColor: '#9080e9'
        },
        _focus: {
            boxShadow: 'none'
        },
        fontWeight: 400,
        fontSize: 'sm',
        borderRadius: 'lg',
    }
})

export default ButtonRokket