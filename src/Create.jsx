import {useState} from "react"
import { createGame } from "./fetch/games";
import {
    Container,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack
} from "@chakra-ui/react"
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"


function Create() {
    // LOCAL STATE
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [publisher, setPublisher] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append('title', title);
            formData.append('year', year);
            formData.append('publisher', publisher);
            formData.append('status', status);
            formData.append('image', image);
    
            await createGame(formData);

            Swal.fire({
                icon: "success",
                title: "Create Success",
                text: "Successfully Add Game",
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/")
        } catch(err) {
            Swal.fire({
                icon: "error",
                title: "Create Failed",
                text: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            })
        }     

    }

    return(
        <>
           <Container>
                <Text fontSize='5xl' align="center">ADD NEW GAME</Text>
                
                <FormControl>
                    <Stack spacing="20px">
                        <FormLabel>TITLE</FormLabel>
                        <Input type="text" onChange={(e) => setTitle(e.target.value)}/>
                        <FormLabel>YEAR</FormLabel>
                        <Input type="text" onChange={(e) => setYear(e.target.value)}/>
                        <FormLabel>PUBLISHER</FormLabel>
                        <Input type="text" onChange={(e) => setPublisher(e.target.value)}/>
                        <FormLabel>STATUS</FormLabel>
                        <Input type="text" onChange={(e) => setStatus(e.target.value)}/>
                        <FormLabel>IMAGE</FormLabel>
                        <Input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                        <Button colorScheme="teal" onClick={handleSubmit}>SUBMIT</Button>
                    </Stack>
                </FormControl>

           </Container>
        </>
    )
}

export default Create;