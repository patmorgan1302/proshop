// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import FormContainer from '../components/FormContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { saveShippingAddress } from '../slices/cartSlice';
// import CheckoutSteps from '../components/CheckoutSteps';


// const ShippingScreen = () => {
//     const cart = useSelector((state) => state.cart);
//     const { shippingAddress } = cart;

//     const [pickles, setPickles] = useState(shippingAddress?.pickles || '');
//     const [lettuce, setLettuce] = useState(shippingAddress?.lettuce || '')
//     const [tomatoes, setTomatoes ] = useState(shippingAddress?.tomatoes || '')
//     const [onions, setOnions] = useState(shippingAddress?.onions || '')
//     const [sauce, setSauce] = useState(shippingAddress?.sauce || '')
//     const [other, setOther] = useState(shippingAddress?.other || '')

    
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
    


//     const submitHandler = (e) => { 
//         e.preventDefault();
//         dispatch(saveShippingAddress({ pickles, lettuce, tomatoes, onions, sauce, other }));
//         navigate('/placeorder');
//     }

//     return(
//         <FormContainer>
//             <CheckoutSteps step1 step2  />
//             <h1>Customize Order</h1>

//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='pickles' className='my-2'>
//                     <Form.Label>Pickles?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='Y/N'
//                         value={pickles}
//                         onChange={(e) => setPickles(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>
//             </Form>

//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='lettuce' className='my-2'>
//                     <Form.Label>Lettuce?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='Y/N'
//                         value={lettuce}
//                         onChange={(e) => setLettuce(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>
//             </Form>

//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='tomatoes' className='my-2'>
//                     <Form.Label>Tomatoes?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='Y/N'
//                         value={tomatoes}
//                         onChange={(e) => setTomatoes(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>
//             </Form>

//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='onions' className='my-2'>
//                     <Form.Label>Onions?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='Y/N'
//                         value={onions}
//                         onChange={(e) => setOnions(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>
//             </Form>

//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='sauce' className='my-2'>
//                     <Form.Label>Sauce?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='Y/N'
//                         value={sauce}
//                         onChange={(e) => setSauce(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>
//            </Form>

//                 <Form onSubmit={submitHandler}>
//                 <Form.Group controlId='other' className='my-2'>
//                     <Form.Label>Other?</Form.Label>
//                     <Form.Control   
//                         type='text'
//                         placeholder='What`s on your mind boo?'
//                         value={other}
//                         onChange={(e) => setOther(e.target.value)}>
//                         </Form.Control>
//                 </Form.Group>

//                 <Button type='submit' variant='primary' className='my-2'>Continue</Button>
//             </Form>
//         </FormContainer>
//     )
// };

// export default ShippingScreen;

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../slices/cartSlice';

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;