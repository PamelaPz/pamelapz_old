import '../assets/App.scss';
import Fullpage from './Fullpage';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid style={{padding: "0"}}>
      <Fullpage />
    </Container>
  );
}

export default Home;