import {Link} from "react-router-dom"
import {Flex, Spacer, Box} from "@chakra-ui/react"

function Navbar() {

    return (
       
        <Flex justifyContent="center" p="20px" bgColor="teal">
            <Box p="5px">
                <Link to="/">HOME</Link>
            </Box>
            <Box p="5px">
                <Link to="/create">ADD GAME</Link>
            </Box>
        </Flex>
    
    )
}

export default Navbar;