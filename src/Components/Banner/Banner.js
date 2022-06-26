import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import './Banner.css';
import Search from '../Search/Search';
import {useNavigate} from "react-router-dom"

// The useNavigate hook returns a function that lets 
// you navigate programmatically, for example after a 
// form is submitted without refresh

function Banner() {
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button 
                onClick={() => setShowSearch(!showSearch)} 
                className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button 
                onClick={() => navigate('/search')} 
                variant='outlined'>Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner