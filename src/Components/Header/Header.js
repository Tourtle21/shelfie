import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div id='header'>
                <h1>SHELFIE</h1>
                <Link to='/'><button className='head-button'>Dashboard</button></Link>
                <Link to='/add'><button className='head-button'>Add Inventory</button></Link>
            </div>
        )
    }
}

export default Header;