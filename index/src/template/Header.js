import React from 'react';
import './Header.css'

class Header extends React.Component {
    render(){
        return(
            <nav className='Header'>
                <div className='title'>
                    TEMPERATURE MONITORING SOFTWARE
                </div>
            </nav>
        );
    }
};

export default Header;