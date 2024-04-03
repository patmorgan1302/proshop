import {  Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import './HomeScreen.css'
import Image from '../assets/photos/Best-Friends.png';

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
       <>
           { isLoading ? (
            <Loader />
           ) : error ? (
            <Message variant='danger'>{ error?.data?.message || error.error }
            </Message>) : (<>

                <Row>
                    <h1 className="londrina-outline-regular" style={{ marginTop: '45px', fontSize: '89px', textAlign: 'center'}}>Welcome To The Shop</h1>
                <Card  style={{ maxWidth: '100%', padding: '2%', marginBottom: '56px', marginTop: '34px'}}>
                    <Card.Img variant="top"  className='homescreen-card' src={Image} style={{ maxHeight: '100%', height: 'auto'}} /></Card>
                </Row>

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

