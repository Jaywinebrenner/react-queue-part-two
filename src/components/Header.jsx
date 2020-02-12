import React from 'react';
import { Link } from 'react-router-dom';


function Header(){

  return (
    <div>
      <h1><span style={{ fontSize: 50}}>C</span>lam Queue!</h1>
      <hr></hr>
      <Link to='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>

    </div>
  );
}

export default Header;
