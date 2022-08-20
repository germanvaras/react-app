import { createContext, useState } from "react";
// 1. Inicializamos el Context con React.createContext()
// 2. Creamos un Provider y le damos un "value"
// 3. Definimos los componentes que van a acceder al context (Consumers)
// 4. Damos a los componentes acceso al context con el hook useContext()
// 5. Los componentes consumers podrán acceder y "subscribirse" al "value" del context
export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];
    // funcion de agregar al carrito
    function addToCart(data, amount) {
        // si el producto extiste solo aumentar la cantidad
        if (isInCart(data.id)) {
            const itemIndex = findItem(data.id)
            copyCart[itemIndex].amount += amount;
            setCart(copyCart)
            console.log(copyCart)
        }
        // si no existe pushearlo al carrito
        else {
            copyCart.push({ ...data, amount });
            setCart(copyCart)
            console.log(copyCart)
        }
    }
    // funcion para remover un item por su id
    function removeItem(data) {
        const itemRemove = findItem(data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
        console.log(copyCart)
    }
    // funcion vaciar al carrito
    function removeAll() {
        copyCart = []
        setCart(copyCart)
        console.log(copyCart)
    }
    // funcion para sacar el total de productos agregados al carrito aunque esten repetidos
    function totalAmount() {
        let amountCart = 0;
        cart.map(index => amountCart += index.amount);
        return amountCart;
    }
    // funcion que calcula el precio total
    function totalPrice(){
        let total = 0;
        cart.map ((index) => total += index.price * index.amount);
        return total;
    }
    // funciones auxiliares
    // funcion para revisar si existe el item
    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === Number(id)))
    }
    // funcion para buscar un item en base a su id
    function findItem(id) {
        return (copyCart.findIndex(item => item.id === Number(id)))
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, removeItem, removeAll, totalAmount, totalPrice }}>
            {children}
        </cartContext.Provider>
    );
}