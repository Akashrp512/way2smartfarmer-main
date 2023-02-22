import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import home from '../images/Home.png';
import Agritech from '../images/Agritech.png';
import Agriclinic from '../images/Agri_cliniic.png';
import Market from '../images/Market_mitra.png';
import Knowledge from '../images/Knowledge_center.png';
import About from '../images/About_us.png';
import Contact from '../images/Contact_us.png';
import { Five, Four, One, Seven, Six, Three, Two } from './Dropdown';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <One>
          <Navbar.Brand href="#home">
            <img src={home} alt="Home" />
            <p>Home</p>
          </Navbar.Brand>
        </One>

        <Two>
          <Navbar.Brand href="#home">
            <img src={Agritech} alt="Home" />
            <p>Agritech</p>
          </Navbar.Brand>
        </Two>

        <Three>
          <Navbar.Brand href="#home">
            <img src={Agriclinic} alt="Home" />
            <p>Agriclinic</p>
          </Navbar.Brand>
        </Three>

        <Four>
          <Navbar.Brand href="#home">
            <img src={Market} alt="Home" />
            <p>Market</p>
          </Navbar.Brand>
        </Four>

        <Five>
          <Navbar.Brand href="#home">
            <img src={Knowledge} alt="Home" />
            <p>Knowledge center</p>
          </Navbar.Brand>
        </Five>

        <Six>
          <Navbar.Brand href="#home">
            <img src={About} alt="Home" />
            <p>About us</p>
          </Navbar.Brand>
        </Six>

        <Seven>
          <Navbar.Brand href="#home">
            <img src={Contact} alt="Home" />
            <p>Contact us</p>
          </Navbar.Brand>
        </Seven>
      </Container>
    </Navbar>
  );
}
