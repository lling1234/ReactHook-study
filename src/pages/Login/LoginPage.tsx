import React from 'react';
import { Outlet } from 'react-router-dom';

function LoginPage() {
  return (

    <div >
      <h2>Login Page</h2>
      <p className='bg'>ling1111</p>
      <Outlet></Outlet>
      </div>
  );
}

export default LoginPage;
