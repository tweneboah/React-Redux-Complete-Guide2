import React from 'react';



const Header = (props) => {
    return (
   
        <nav className='navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0'>
              <div className='container'>
                  <a href='/'>{props.branding}</a>
                   <div>
                       <ul className='navbar-nav mr-auto'>
                           <li className='nav-item'>
                               <a href='/' className='nav-link'>Home</a>
                           </li>

                           <li className='nav-item'>
                               <a href='/' className='nav-link'>About</a>
                           </li>

                           <li className='nav-item'>
                               <a href='/' className='nav-link'>Login</a>
                           </li>

                       </ul>
                   </div>
              </div>
        </nav>
    )
}

 
export default Header;