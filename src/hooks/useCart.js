import { useContext } from "react"
import { IsAuthContext } from "../context/IsAuthContext"

export const useCart = () => {
    const {cartItems, setCartItems} = useContext(IsAuthContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.cost + sum , 0)

    return {cartItems, setCartItems, totalPrice}
}