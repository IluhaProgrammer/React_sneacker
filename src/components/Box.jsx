import React, { useContext } from 'react';
import { IsAuthContext } from '../context/IsAuthContext';

const Box = ({url, title, text1, text2 }) => {

    const {setModalOpen} = useContext(IsAuthContext)

    const modalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className='missed_box' >
            <img src={url} />
                <div className='box_text' >
                    <h3>{title}</h3>
                    <p>{text1}<br/> {text2}</p>
                <div onClick={modalClose} className='submit_btn' >
                    <img src='/photos/str.svg' />
                    <span>Вернуться к заказам</span>
                </div>
            </div>
        </div>
    );
};

export default Box;