import { Navbar,Container,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navmenu =()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/List" >Movies</Nav.Link>
                   
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}
export default Navmenu