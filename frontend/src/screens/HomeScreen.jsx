import { Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import './HomeScreen.css'

// import BestFriends from '../assets/photos/Best-Friends.png';
// import Canibals from '../assets/photos/Canibals.png';
// import Centipede from '../assets/photos/Centipede-Man.png';
// import ET from '../assets/photos/E.T.-.png';
// import Horse from '../assets/photos/Horse.png';
// import Genie from '../assets/photos/Genie.png';
// import RamHead from '../assets/photos/Ram-Head.png';


const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
       <>
           { isLoading ? (
            <Loader />
           ) : error ? (
            <Message variant='danger'>{ error?.data?.message || error.error }
            </Message>) : (<>

                {/* <Row>
                <h1 className="londrina-outline-regular" >Welcome To The Shop</h1>
                    <Col md={6} >
                        <Card className="card-image" >
                            <Card.Img variant="top"  className='homescreen-card' src={Centipede} />
                        </Card>
                        <Card  className="card-image">
                            <Card.Img variant="top"  className='homescreen-card2' src={Canibals} />
                        </Card>
                        <Card  className="card-image">
                            <Card.Img variant="top"  className='homescreen-card3' src={RamHead} />
                        </Card>
                        <Card  className="card-image"> <strong style={{ marginTop: '5px', marginBottom: '5px' }}>WEIRD IS THE GOAL.</strong>
                            <Card.Img variant="top"  className='homescreen-card' src={ET} /> 
                            
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="card-image">
                            <Card.Img variant="top"  className='homescreen-card2' src={ET}/> 
                        </Card>

                        <Card className="card-image">
                            <Card.Img variant="top"  className='homescreen-card3' src={Horse}/> 
                        </Card>

                        <Card className="card-image">
                            <Card.Img variant="top"  className='homescreen-card' src={Genie}/>
                        </Card>
                        <Card className="card-image">
                            <Card.Img variant="top"  className='homescreen-card2' src={BestFriends}/>
                        </Card>
                    </Col>
                </Row> */}

                <h1 className="londrina-outline-regular">Latest Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                        </Col>
                    ))}
                </Row>
           </>) }
       </>
    )
};

export default HomeScreen;

