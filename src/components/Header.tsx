import { Icon } from "@chakra-ui/icons"
import { MdAccountCircle } from "react-icons/md";
import { Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import Router from 'next/router'

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        Router.push('/')
    }
    return (
        <Flex bg='#614ae0' minH={10} boxShadow={'md'} justify={'flex-end'} align={'center'}>
            <Menu>
                <MenuButton mr={2}>
                    <Icon height={6} width={6} color={'white'} as={MdAccountCircle} />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={handleLogout}>
                        Cerrar sesión
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Header