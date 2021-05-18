import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';


import './LandingPage.css';


function LandingPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/getallproducts').then((res) => {
            console.log(res);
            setData(res.data.productList);
        });
    });


    return (
        <React.Fragment>
            <div class="lp-wrapper">
                <nav class="lp-nav">
                    <a class="navbar-brand" href="#">
                        <span class="sr-only">Pickup</span>
                    </a>
                    <ul>
                            <li>
                                <a class="nav-link" href="#">Signin</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">Signup</a>
                            </li>
                    </ul>
                </nav>
                <div class="lp-content">
                    <div class="container">
                        <h1 class="display-3">Pickup your Tech Mentors</h1>
                        <h2 class="m-b-3">Craft your journey </h2>
                        <a class="overviewbbtn" href="#">Welcome Go!</a>
                    </div>
                </div>
                </div>
        </React.Fragment>
    );
}
export default LandingPage;


