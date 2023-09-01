import {useEffect, useState} from 'react'
import {listGames, deleteGame} from "./fetch/games.js"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Spinner,
    Center,
    Image,
    Button
} from '@chakra-ui/react'
import Swal from 'sweetalert2'

// Client-Side Rendering

function Home() {
    // LOCAL STATE
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchGames = async () => {
        try {
            // Client Side Rendering
            // Munculin pagenya duluan, baru datanya.
            const response = await listGames();

            setGames(response);
            setLoading(false);
        } catch(err) {
            console.log(err);
        }
    }

    const handleDeleteGame = async (id) => {

        try {

            await deleteGame(id);

            Swal.fire({
                icon: "success",
                title: "Delete Success",
                text: "Successfully delete",
                showConfirmButton: false,
                timer: 1500
            })

            // REFETCH DATA TERBARU
            fetchGames();
        } catch(err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Delete Failed",
                text: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchGames();
    }, [])
    
    if(loading) {
        return (
            <>
                <Text fontSize='5xl' align="center">Loading.....</Text>
                <Center>
                    <Spinner size='xl' />
                </Center>
            </>
        )
    }   

    return(
        <>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Title</Th>
                            <Th>Year</Th>
                            <Th>Publisher</Th>
                            <Th>Image</Th>
                            <Th>Status</Th>
                            <Th>ACTION</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {games.map((game, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{index+1}</Td>
                                    <Td>{game.title}</Td>
                                    <Td>{game.year}</Td>
                                    <Td>{game.publisher}</Td>
                                    <Td><Image boxSize='200px' objectFit="cover" src={game.image} alt="image file"/></Td>
                                    <Td>{game.status}</Td>
                                    <Td><Button colorScheme='red' onClick={(e) => handleDeleteGame(game.id)}>DELETE</Button></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Home;