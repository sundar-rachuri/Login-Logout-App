import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className='d-flex justify-content-center align-items-center bg-light vh-100'> 
            <div className='bg-info p-3 rounded-1 w-75'>
                <h2 className='d-flex'>Welcome Back USER!!</h2>
                <form action="">
                    <Link to="/" className='btn btn-warning border w-100 rounded-0'>Log-Out</Link>
                </form>
            </div>
        </div>
    )
}

export default Home