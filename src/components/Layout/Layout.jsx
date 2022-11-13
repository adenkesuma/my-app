import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  return (
    <div className='app'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>&lt;/body&gt; </span>
        </div>
    </div>
  )
}

export default Layout;