import { Container, Row, Col} from "react-bootstrap";
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()


    return (
        <footer className='footer'> 
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p style={{ marginTop: '12px' }}>YoungLadCo &copy; {currentYear}</p><p> Sprigg Diddy Designs &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;