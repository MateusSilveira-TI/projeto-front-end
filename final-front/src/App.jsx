import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';


const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));


const ProductViewPage = lazy(() => import('./pages/ProductViewPage')); // <--- ADICIONE ESSA LINHA

// Seus imports antigos
const About = lazy(() => import('./pages/Home').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Home').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/Home').then(module => ({ default: module.NotFound })));
const UserProfile = lazy(() => import('./pages/Home').then(module => ({ default: module.UserProfile })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando página...</div>}>
        <Routes>
          
          <Route path="/" element={
            <Layout>
              <Outlet />
            </Layout>
          }>
            
            <Route index element={<HomePage />} />
            
            <Route path="/products" element={<ProductListingPage />} />
            
           
            <Route path="/product/:id" element={<ProductViewPage />} /> 
            
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user" element={<UserProfile />} />
            <Route path="user/:id" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
            
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;