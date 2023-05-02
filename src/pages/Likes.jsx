import React, { useContext } from 'react';
import Header from '../components/Header';
import Sneacker from '../components/Sneacker';
import { Link } from 'react-router-dom';
import { IsAuthContext } from '../context/IsAuthContext';

const Likes = ({ favourites, liked = [], addLikedItems}) => {


    if(liked !== undefined) {
        console.log('Все окей')
    } else {
        console.log('Все пошло не по плану')
    }

    return (
        <div className='App' >
            <Header/>
            {   
                liked.length !== 0

                            ? <div className='FLikes' >
            <h1>Мои закладки</h1>
            <div className='sneackers' >
                {
                liked.map((add) => {
                    return <div className='sneacker' >
                        <Sneacker
                        addLikedItems={addLikedItems}
                        favourites={favourites}
                        key={add.id}
                        ulr={add.url}
                        text={add.text}
                        cost={add.cost}
                />
                        </div>})
                
            }
            </div>
            </div>

                            : <div className='noLiked' >
                                <img src='/photos/smail.svg' alt='Смайлик' />
                                <div className='noLiked_text' >
                                    <h2>Закладок нет </h2>
                                    <p>Вы ничего не добавляли в закладки</p>
                                </div>
                                <Link to='/main' >
                                <div className='submit_btn' >
                                    <img src='/photos/str.svg' />
                                    <span>Вернуться назад</span>
                                </div>
                                </Link>
                            </div>
            }
        </div>
    );
};

export default Likes;