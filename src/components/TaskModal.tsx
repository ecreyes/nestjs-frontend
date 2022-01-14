import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import { AddIcon, EditIcon } from "@chakra-ui/icons"
import ButtonRokket from './ButtonRokket'

const TaskModal: React.FC<{ type: 'create' | 'edit' }> = ({ type }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const getTitle = () => {
        return type === 'create' ? 'Crear tarea' : 'Editar tarea'
    }

    const getTextButton = () => {
        return type === 'create' ? 'Crear' : 'Editar'
    }

    return (
        <>
            {type === 'create' ?
                <IconButton bg={'#614ae0'} color='white' borderRadius={100} position={'absolute'} bottom={0} right={0} my={2} mr={2} onClick={onOpen}  aria-label='add task' icon={<AddIcon />} />
                :
                <EditIcon color='#614ae0' onClick={onOpen} />
            }


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{getTitle()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>content</div>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonRokket>{getTextButton()}</ButtonRokket>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TaskModal