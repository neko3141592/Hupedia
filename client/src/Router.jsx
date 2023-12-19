import React from 'react';
import  {BrowserRouter , Route , Routes} from 'react-router-dom';

import Home from './components/Home';
import Page from './components/Page';
import Header from './components/Header';
import Edit from './components/Edit';

const  Router =  () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className='main'>
                    <Routes>
                        
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/pages/:id' element={<Page/>}></Route>
                            <Route path='/pages/:id/edit' element={<Edit/>}></Route>
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;