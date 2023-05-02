import React, { useContext, useEffect, useState } from 'react'
import '../styles/Main.css'
import Sneacker from '../components/Sneacker';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Search from '../components/Search'
import { IsAuthContext } from '../context/IsAuthContext';
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const  Main =  ({isLoading, setIsLoading}) => {

  const{modalOpen, 
        setModalOpen, 
        sneackers, 
        setSneackers, 
        cartItems, 
        setCartItems, setFavorets,
        isItemAdded} = useContext(IsAuthContext)
  const[search, setSearch] = useState('')

  const addCartItems = (obj) => {
    try {
        if(cartItems.find((add) => Number(add.id) === Number(obj.id))) {
            axios.delete(`http://localhost:4100/cart/${obj.id}`);
            setCartItems(prev => prev.filter(e => e.id !== obj.id))
        } else {
            axios.post('http://localhost:4100/cart/', obj)
              setCartItems([...cartItems, {...obj}])
         } 
    } catch(e) {
      alert('Не удалось добавить кроссовки в корзину')
    }
  }

   const addLikedItems = async (lik) =>  {
      
   }

    const onDeleteCart = (id) => {
      axios.delete(`http://localhost:4100/cart/${id}`)
      setCartItems(prev => prev.filter((e) => e.id !== id))
    }
  
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const filterSneackers = sneackers.filter(({text}) => {
      return  text.toLowerCase().includes(search.toLowerCase())
    })

    const renderItems = () => {
      return (
                <div className='sneackers' >
                  {
                    isLoading
                        ? [...Array(12)].map(sneak => 
                          <Sneacker  
                              loading={true}
                          />)

                        : filterSneackers.length !== 0
                                  ? filterSneackers.map(sneak => 
                          <Sneacker  
                              loading={false}
                              addCartItems={(obj) => addCartItems(obj)} 
                              addLikedItems={(lik) => addLikedItems(lik)}
                              
                              key={sneak.id} 
                              url={sneak.url} 
                              text={sneak.text} 
                              cost={sneak.cost} 
                              id={sneak.id}
                          />)

                                  : <h1 className='no' >Кроссовки не найдены</h1>
                  }
          </div>
      )
    }

    

    useEffect(() => {
      async function fetchData() {
        const carts =  await axios.get('http://localhost:4100/cart')
        const sneackers = await axios.get('http://localhost:4100/items')
        const likes = await axios.get('http://localhost:4100/liked/')

        setIsLoading(false)
        setCartItems(carts.data)
        setSneackers(sneackers.data)
        setFavorets(likes.data)
      }
      fetchData()
      
    }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
return (
      <div className="App">
          <div className={modalOpen ? 'modalo' : 'noModalo' } >
           <Modal onDeleteCart={onDeleteCart} sneackers={cartItems} />
          </div>
        <Header/>     
        <div className='slider' >
         <Slider  {...settings} >
            <div className='slik' >
              <img  height={200} src='/sliders/Slider.svg' />
            </div>
            <div >
              <img  className='nike' height={200} src='/sliders/banner.jpg' />
            </div>
            <div>
              <img className='nike' height={200} src='/sliders/banner2.jpg' />
            </div>
         </Slider>
         </div>
        <main>
          <Search onChange={onChange} search={search} setSearch={setSearch} />
          {renderItems()}
       </main>
    </div>
  );
  
}

export default Main;