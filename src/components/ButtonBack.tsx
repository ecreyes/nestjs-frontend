import { ArrowBackIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
const ButtonBack: React.FC = (props) => {
    return (
        <NextLink href='/'>
            <ArrowBackIcon ml={2} my={4} w={8} h={8}></ArrowBackIcon>
        </NextLink>
    )
}
export default ButtonBack