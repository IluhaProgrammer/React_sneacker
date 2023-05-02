import React, { useState } from 'react'
import './styles/Main.css'
import { IsAuthContext } from './context/IsAuthContext';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const[modalOpen, setModalOpen] = useState(false)
  const[sneackers, setSneackers] = useState([])
  const[cartItems, setCartItems] = useState([])
  const[favorets, setFavorets] = useState([])

  const isItemAdded = (id) => {
    return  cartItems.some(e => Number(e.id) === Number(id))
  }

  return (
    <Router>
    <IsAuthContext.Provider value={{
      modalOpen ,
      setModalOpen,
      sneackers,
      setSneackers,
      cartItems,
      setCartItems,
      setFavorets,
      isItemAdded
    }}>
      <AppRouter/>
    </IsAuthContext.Provider>
    </Router>
  );
}

export default App;
