import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

import { useDispatch, useSelector } from 'react-redux';
import {calculateTotals, getCartItems} from './features/cart/cartSlice';
import Modal from "./components/Modal";
import { useEffect } from "react";


function App() {
  const { cartItems ,isLoading } = useSelector((state)=>state.cart);

  const {isOpen} = useSelector((state)=>state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems]);

  useEffect(() => dispatch(getCartItems()),[]);

  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (  
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );

}
export default App;
