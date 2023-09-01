import {useState} from 'react'
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Text,
    Stack,
    Box
} from '@chakra-ui/react'
import {login} from "./fetch/auth.js"
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async () => {
        
        try {
            await login({username, password})
    
            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                text: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/");

        } catch(err) {
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return(
       
        <Center w="100%" h="100%">
            <Stack spacing="10px">
                <Text fontSize='5xl' align="center">Login</Text>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' onChange={(e) => setUsername(e.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleSubmit}>SUBMIT</Button>
                </FormControl>
            </Stack>
        </Center>            
       
    )
}

export default Login;