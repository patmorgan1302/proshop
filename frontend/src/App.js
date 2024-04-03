import { Container } from "react-bootstrap"
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3" id="main-css">
        <Container className="main" >       
          <Outlet />
        </Container>  
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
};

export default App;
