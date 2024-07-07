import React from 'react';
import "../css/style.css";
import NavBar from './NavBar';

const Menu=()=>{
    return(
        <div className='menu'>
             <NavBar/>

             <img id='coffee-menu-img' src='https://i.etsystatic.com/26217258/r/il/922710/3214023924/il_fullxfull.3214023924_g76t.jpg'alt='Coffee Menu' />
        </div>
       
    );
};

export default Menu;