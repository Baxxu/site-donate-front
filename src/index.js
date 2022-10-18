import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Account from "./pages/Account";
import App from "./App";
import ReturnUrl from "./pages/ReturnUrl";
import Test from "./pages/Test";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="return_url" element={<ReturnUrl/>}/>

            <Route path="test" element={<Test/>}/>

            <Route path="*" element={<Main/>}/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} style={{maxWidth: 600}}/>
);
