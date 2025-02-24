import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the cart item type
interface CartItem {
    image: string;
    title: string;
    quantity: number;
    subtotal: number;
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
        setCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.cartItems = action.payload.map((item) => ({
                ...item,
                subtotal: Number(item.price) * Number(item.quantity),
            }));
        },
        updateCartItemQuantity: (
            state,
            action: PayloadAction<{ index: number; quantity: number }>
        ) => {
            const { index, quantity } = action.payload;
            if (state.cartItems[index]) {
                state.cartItems[index].quantity = quantity;
                state.cartItems[index].subtotal =
                    Number(state.cartItems[index].price) * quantity; // Update subtotal
            }
        },
        removeCartItem: (state, action) => {
            const index = action.payload;
            state.cartItems = state.cartItems.filter((_, i) => i !== index);
        },
    },
});

export const {
    setCartOpen,
    setCartItems,
    removeCartItem,
    updateCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
