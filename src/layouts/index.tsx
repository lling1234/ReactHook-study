import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import "./index.scss"

function Layout() {
  return (
    <section id='container'>
        <aside>
            <div><Link to="/layout/home">首页</Link></div>
            <div><Link to="/layout/user">用户</Link></div>
        </aside>
        <section>
            <header>header</header>
            <main><Outlet></Outlet></main>
        </section>
    </section>
    );
}

export default Layout;
