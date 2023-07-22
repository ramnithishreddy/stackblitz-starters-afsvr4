import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Nopage from './pages/Nopage';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Contacts" element={<Contact />} />
          <Route path="Layout" element={<Layout />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
