import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './estilos/index.css';
import './estilos/Footer.css';
import './estilos/Gallery.css';
import './estilos/HomePage.css';
import './estilos/Section.css';
import './estilos/ProductCard.css';
import './estilos/ProductListing.css';
import './estilos/EpecialOferta.css';
import './estilos/CategoryIcons.css';
import './estilos/ProductListingPage.css';
import './estilos/FilterGroup.css';
import './estilos/ProductOptions.css';
import './estilos/ProductViewPage.css';
import './estilos/BuyBox.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
