import { useState } from "react"
import CartContext from "./CartContext"

const CartContextProvider = ({Children})=>{
    const [cart, setCart] = useState ([])

    const addItem=(item, q) =>{
        setCart({
            quantity: q,
            ...item
        })
    }

    const removeItem=(id)=>{
        setCart(
            cart.filter((el)=> el.id !== id)
        )
    }

    const clear=()=>{
        setCart([])
    }

    const getTotal=()=> {
        return 2500
    }

    const values={
        cart,
        addItem,
        removeItem,
        clear,
        getTotal

    }
    return(
        <CartContext.Provider value={values} >
            {Children}
        </CartContext.Provider>
    )
}

export default CartContextProvider