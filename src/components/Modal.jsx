import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import { IsAuthContext } from '../context/IsAuthContext';
import Box from './Box';
import axios from 'axios';
import { useCart } from '../hooks/useCart';

const Modal = ({sneackers = [], onDeleteCart}) => {

    const{modalOpen,setModalOpen} = useContext(IsAuthContext)
    const{setCartItems, cartItems, totalPrice} = useCart()
    const[succes, setSucces] = useState(false)
    const[succesId, setSuccesId] = useState(null)
    const[loading, setLoading] = useState(false)

    const modalClose = () => {
        setModalOpen(false)
    }


    const onClickOrder = async () => {
        try {
            setLoading(true)
            const {data} = await axios.post('http://localhost:4100/order', {items: cartItems})
            setSuccesId(data.id)
            setSucces(true)
            setCartItems([])
            cartItems.forEach(e => {
                axios.delete(`http://localhost:4100/cart/${e.id}`)
            });
            
        } catch(error) {
            alert(error.message)
        }
        setLoading(false)
    }

    return (
        <div className='modal hidden ' >
            <div className='modal-content' >
                <div className='cart_text' >
                <h2>Корзина</h2>
                <img  onClick={modalClose} src='/sneackers/closeButton.svg' />
                </div>
                {
                    sneackers.length == 0 
                                ? <Box 
                                    url={succes ?'/photos/suces.svg' :'/photos/cartBox.svg'}
                                    title={succes ?'Заказ оформлен' :'Корзина пустая'}
                                    text1={succes ?`Ваш заказ #${succesId} скоро будет передан` :'Добавьте хотя бы одну пару'}
                                    text2={succes ?'курьерской службе' :'кроссовок, чтобы сделать заказ'}
                                  />

                                :<div className='cart_items' >
                    {
                        sneackers.map(e =>
                            <CartItem onDeleteCart={onDeleteCart} id={e.id} key={e.id} url={e.url} text={e.text} cost={e.cost} />)
                    }
                    <div className='result_shop' >
                        <div className='result_cost' >
                            <p>Итого: <span>..................................................</span><strong>{totalPrice} руб</strong> </p>
                        </div>
                        <div className='result_nalog' >
                            <p>Налог 5%:<span>...........................................</span><strong>{totalPrice * 0.05} руб</strong></p>
                        </div>
                        <button disabled={loading} className='submit_button' onClick={onClickOrder} >
                             <span>Оформить заказ</span>
                             <img src='/photos/strelka.svg' />
                        </button>
                       
                    </div>
                </div>
                }
                
            </div>
        </div>
    );
};

export default Modal;