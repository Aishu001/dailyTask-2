import {createSlice} from '@reduxjs/toolkit'
import Data from './Data';


const initialData = Data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    brand: product.brand,
    price: product.price,
    discount: product.discountPercentage,
    stock: product.stock,
    thumbnail : product.thumbnail,
    imageUrls: product.images,
    quantity: 0
  }));



  const dataSlice = createSlice({
    name: 'productDetails',
    initialState: initialData,
    reducers: {
      increment: (state, action) => {
        const productId = action.payload.productId;
        return state.map((product) => {
          if (product.id === productId && product.quantity < product.stock) {
            return {
              ...product,
              quantity: product.quantity + 1,
              stock: product.stock - 1,
            };
          }
          return product;
        });
      },
  
      decrement: (state, action) => {
        const productId = action.payload.productID;
        return state.map((product) => {
          if (product.id === productId) {
            if (product.quantity > 0) {
              return {
                ...product,
                quantity: product.quantity - 1,
                stock: product.stock + 1,
              };
            }
          }
          return product;
        }).filter((product) => product !== null);
      }
      
    },
  });
  
  export const { increment, decrement } = dataSlice.actions;
  export default dataSlice.reducer;
  