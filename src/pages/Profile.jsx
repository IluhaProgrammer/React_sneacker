import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sneacker from '../components/Sneacker';
import axios from 'axios';
import ContentLoader from 'react-content-loader';

const Profile = () => {
    const[isLoading, setIsLoading] = useState(true)
    const[orders, setOrders] = useState([])

    useEffect(() => {
        try {
            const fetchOrders =  async () => {
            const {data} = await axios.get('http://localhost:4100/order')
            setIsLoading(false)

            setOrders(data.map(obj => obj.items).flat())
        }
        fetchOrders()
        } catch(error) {
            alert('Ошибка при загрузке заказов')
        }
    }, [])

    return (
    <div className='App' >
        <Header/>
        <h1 className='hh' >Мои заказы</h1>
        <div className='sneackers' >
            {
                isLoading
                    ? [...Array(12)].map(order => 
                        <Sneacker  
                            loading={true}
                        />)
                    :<> {orders.map(order => {
                return (
                    <Sneacker 
                        key={order.id}
                        url={order.url}
                        text={order.text}
                        cost={order.cost}
                        hidden={true}
                    />
                )
            })}
            </>
            }
            
        </div>
        </div> 
    );
};

export default Profile;