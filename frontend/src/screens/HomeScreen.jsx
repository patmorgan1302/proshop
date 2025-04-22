import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import  { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
         <div>
            { isLoading ? (
                <Loader />
            ) : error ? (<Message variant="danger">{error?.data?.message || error.error}</Message>) : ( <>
              <h1 style={{textAlign: 'center', marginBottom: '120px', marginTop: '45px'}}>
                Liberty Park Employee Portal</h1>  
              <h2>Employee Menu</h2>
              <h3 style={{
                 marginTop: '45px', 
                 marginLeft: '25px', 
                 textDecoration: 'underline'
                }}>Entrees</h3>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={4} md={4} lg={3} xl={4}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
              </>
            )}

          
        </div>
    )
};

export default HomeScreen;