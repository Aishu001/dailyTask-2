import {configureStore} from '@reduxjs/toolkit';
import dataSlice  from './dataSlice';


const Store = configureStore({
    reducer : {
        data : dataSlice,
    }
})

export default Store