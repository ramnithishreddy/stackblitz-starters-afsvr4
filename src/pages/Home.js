import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Home = () => {
  <div>
    Home
    <nav>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'Contact'}>Contact</Link>
      <br />
      <Link to={'Layout'}>Layout</Link>
      <br />
      <Link to={'Blogs'}>Blogs</Link>
      <br />
      <Link to={'Nopage'}>Nopage</Link>
      <br />
    </nav>
    <hr />
    <Outlet />
  </div>;
};

export default Home;
