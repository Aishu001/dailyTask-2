import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch , useSelector} from 'react-redux';
import { increment, decrement } from './dataSlice';
import './App.css'

function ShoppingCart() {
    const dispatch = useDispatch()
    const getProduct = useSelector(state => state.data)

     const updatePrice = getProduct.map((product) => ({
        ...product , 
        totalPrice : (product.price - (product.discount / 100)) * product.quantity,
     }
          
     ))

     const cartTotal = updatePrice.reduce((total, product) => {
        
      return  total + product.totalPrice
     },0)
    //  console.log(getProduct);
   
  return (
    <>
    <div className="total">
      <p>Cart Total: ${cartTotal.toFixed(2)}</p>
      <button id="pay" >Pay Now</button>
    </div>
    <br />
    <br />

    <div className="container">
      <div className="row">
        {getProduct.map((product) => (
          <div key={product.id}  className="col-md-4 mb-4">
            <Card className='cardd'>
              <Card.Img className='img' variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title className='title'>{product.title}</Card.Title>
                <Card.Text className='description'>{product.description}</Card.Text>
                <Card.Text className='title'>${product.price}</Card.Text>
                {product.quantity === 0 ? (
                  <Button className='btnn'
                    variant="primary"
                    onClick={() => {
                      dispatch(increment({ productId: product.id }));
                    }}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <div>
                    <Button className='btnn' onClick={() => dispatch(increment({ productId: product.id }))}>+</Button>
                    <span className='description'>{product.quantity}</span>
                    <Button  className='btnn' onClick={() => dispatch(decrement({ productID: product.id }))}>-</Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default ShoppingCart