import React, { useContext } from 'react';
import { IsAuthContext } from '../context/IsAuthContext';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const {modalOpen, setModalOpen} = useContext(IsAuthContext)
  const{cartItems, totalPrice} = useCart()

  const modalAdd = () => {
    console.log(modalOpen)
    setModalOpen(true)
  }


    return (
        <header className='header' >
          <Link className='logo-link' to='/main' >
          <div className='logo' >
              <img src='/photos/logo1.png' />
              <div className='logo_text' >
                <h1>REACT SNEACKERS</h1>
                <span>Магазин лучших кроссовок</span>
              </div>
          </div>
          </Link>
          
          <div className='shopping_info' >
            <img className='shop_cart' onClick={modalAdd} src='/photos/shopping-cart.png' />
              <p onClick={modalAdd}>{totalPrice} руб</p>
              <Link to='/liked' >
                <img src='/photos/like.png' />
              </Link>
              <Link to='/profile' >
              <img src='/photos/profile.png' />
              </Link>
          </div>
        </header>
    );
};

export default Header;