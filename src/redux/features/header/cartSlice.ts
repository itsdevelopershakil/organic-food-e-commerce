import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the cart item type
interface CartItem {
    image: string;
    title: string;
    quantity: string;
    price: string;
}

// Define the cart state type
interface CartState {
    cartItems: CartItem[];
    open: boolean;
}

// Initial state
const initialState: CartState = {
    cartItems: [],
    open: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
        },
        removeCartItem: (state, action) => {
            const index = action.payload;
            state.cartItems = state.cartItems.filter((_, i) => i !== index);
        },
    },
});

export const { setCartOpen, setCartItems, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
