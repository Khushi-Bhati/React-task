import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Loginform from './Components/Loginform';
import Registerform from './Components/Registerform';
import Hero from './Components/Hero';
import { Provider } from 'react-redux';
import { Store } from './Store/Store';

import Protectedroute from './Components/Protectedroute';




const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<App />}>
       <Route index element={<Loginform />} />
      <Route path='/' element={<Protectedroute />}>
        <Route path='/main' element={<Hero />} />



      </Route>


      <Route path='/register' element={<Registerform />} />
      

    </Route>




  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={Store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);







