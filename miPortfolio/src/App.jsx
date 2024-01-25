
import './App.css'
import HeaderComponent from './components/headerComponent/headerComponent'
import { Container } from 'react-bootstrap';
function App() {

  return (
    <div>
    <HeaderComponent/>
    <Container style={{ marginTop: '70px', textAlign: 'center' }}></Container>
    </div>
      
  )
}

export default App
