import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <div className="navlogo">
                            <img src="./amazon_PNG25.png" alt="" />
                        </div>
                        <div className="nav_searchbaar">
                            <input type="text" name='' />
                            <div className="search_icon">
                                <SearchIcon id="search" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav_btn">
                            <a href="">signin</a>
                        </div>
                        <div className="cart_btn">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>Cart</p>
                        </div>
                        <Avatar className="avtar" />
                    </div>
                </nav>
            </header>


        </>
    )
}

export default Navbar