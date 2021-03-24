import './App.scss';
// import Menu from './Menu';
import Fullpage from './Fullpage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid style={{padding: "0"}}>
      {/* <Menu/> */}
      <Fullpage />
    </Container>
  );
}

export default App;
