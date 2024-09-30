import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, q) => {
        setCart(prevCart => [
            ...prevCart,
            { ...item, quantity: q }
        ]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((el) => el.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );

    
};

export default CartContextProvider;