import React, { useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Likes from '../pages/Likes';
import Main from '../pages/Main'
import Profile from '../pages/Profile'

const AppRouter = () => {

    const[isLoading, setIsLoading] = useState(true)

    return (
        <Routes>
            <Route path='/main' exact="true" element={<Main isLoading={isLoading} setIsLoading={setIsLoading} />} />
            <Route path='/' element={<Main isLoading={isLoading} setIsLoading={setIsLoading} />  } />   
            <Route path='/liked' element={<Likes/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='*' element={<Main isLoading={isLoading} setIsLoading={setIsLoading} />} />
        </Routes>
    );
};

export default AppRouter;