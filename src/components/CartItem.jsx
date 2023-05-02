import React, { useContext } from 'react';
import { IsAuthContext } from '../context/IsAuthContext';

const CartItem = ({cost, url, text, onDeleteCart, id}) => {
        

    return (
        <div className='cart_item' >
                        <img  width={70} height={70} src={url} />
                        <div className='cart_title' >
                            <span>{text}</span>
                            <h3>{cost} руб</h3>
                        </div>
                        <img 
                            className='closeButton'
                            width={32} 
                            height={32} 
                            src='/sneackers/closeButton.svg' 
                            alt='closeButton' 
                            onClick={() => onDeleteCart(id)}
                        />
                    </div>
    );
};

export default CartItem;