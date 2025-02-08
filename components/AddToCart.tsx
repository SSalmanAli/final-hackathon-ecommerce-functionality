"use client"
import { addToCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';
import { Button } from '@/components/ui/button';
import React from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  dPrice: number;
  qty: number;
}

const AddToCart = ( { cartItem } : { cartItem: CartItem }) => {
    const dispatch = useAppDispatch()

    const notify = () => toast.success('Product Added Successfully!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
  return (
    <>
    <div className='w-fit' onClick={() => dispatch(addToCart(cartItem))}>
      {/* <button className="bg-white" onClick={notify}>Notify!</button> */}
      <Button 
       onClick={notify}
      variant="outline" 
      className="w-[191px] h-[50px]">Add To Cart</Button>

    </div>
    <ToastContainer
    position="bottom-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Flip}
    />
    </>
  )
}

export default AddToCart
