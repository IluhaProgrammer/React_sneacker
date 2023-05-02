import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { IsAuthContext } from '../context/IsAuthContext';

const Sneacker = ({url, text, cost, addCartItems, id, addLikedItems, favourite,  loading, hidden}) => {

    const{isItemAdded} = useContext(IsAuthContext)
    const[liked, setLiked] = useState(favourite)

    const onChecked = () => {
          addCartItems({id, url, text, cost})
    }

    const onLiked = () => {
        setLiked(!liked)
            addLikedItems({id, url, text, cost})
    }

    return (
        <div className='card' >
            {
                loading
                    ? <ContentLoader 
                    speed={2}
                    width={175}
                    height={200}
                    viewBox="0 0 150 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="100" rx="4" ry="4" width="150" height="15" /> 
                    <rect x="0" y="125" rx="4" ry="4" width="90" height="15" /> 
                    <rect x="0" y="175" rx="6" ry="6" width="80" height="24" /> 
                    <rect x="118" y="168" rx="7" ry="7" width="32" height="32" />
                  </ContentLoader>

                    : <>
                        <div onClick={onLiked} className='card-liked' >
                <img  width={40} height={40} src={liked ? '/sneackers/liked.svg' :'/sneackers/dislike.svg'} />
            </div>
            <div className='sneacker-photo' > 
            <img  className='sneacker' src={url} />
            </div>
            <div className='sneacker-name' >
            {text}
            </div>
            <div className='sneacker-plus' >
            <div className='sneacker-cost' >
                <span className='span1' >Цена:</span><br/>
                <span className='span' ><strong>{cost} руб</strong></span>
            </div> 
            { hidden 
                    ? null
                    :<button  
                    className='button-add' 
                    type='button' 
                    onClick={onChecked}
            >
            <img  className='plus' src={ isItemAdded(id) ? '/sneackers/succes.svg' : '/sneackers/plus.png' } />
            </button>
        }
            </div>
            </>
            }
            
          </div>
    );
};

export default Sneacker;
