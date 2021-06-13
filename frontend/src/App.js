import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header/>
      <main className='py-5'>
        <Container>
          <h1>Alpha Shoppe</h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
