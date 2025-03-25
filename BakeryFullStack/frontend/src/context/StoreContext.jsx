// import { createContext, useState } from 'react'
// import bk1 from '../../assets/images/bk1.jpg'
// import bk2 from '../../assets/images/bk2.jpg'
// // Import các hình ảnh khác tương tự

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState([])
//   const [explore, setExplore] = useState([
//     { id: 1, name: 'Earl Gray Tea', price: 5.99, image: bk1 },
//     { id: 2, name: 'Green Tea', price: 4.99, image: bk2 },
//     // Thêm các mục khác tương tự
//   ])

//   const addToCart = (item) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
//       if (existingItem) {
//         return prevItems.map(cartItem =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }]
//       }
//     })
//   }

//   const removeFromCart = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id))
//   }

//   const contextValue = {
//     cartItems,
//     explore,
//     addToCart,
//     removeFromCart,
//   }

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   )
// }

// export default StoreContextProvider