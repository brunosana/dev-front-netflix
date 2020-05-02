import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="header" >
                <Link to="/" >HEADER</Link>
            </div>
        );
    }
}

export default Header;