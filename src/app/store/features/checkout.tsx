import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Cart[] = []

export const checkoutSlice = createSlice({
  name: 'checkout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionlity
    addToCheckout(state , action){
    const uuid = Math.floor(1000 + Math.random()*9000 )
    const newObj = {...action.payload , uuid}
    state.push(newObj);
    },
  },
})

export const {addToCheckout} = checkoutSlice.actions


export default checkoutSlice.reducer