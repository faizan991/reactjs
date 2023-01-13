import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom';
const Home = () => {
    const [searchParams ,setSearchParams] = useSearchParams()
    const activeUser = searchParams.get('filter') === 'filter'
    return (
        <div>
            <h4>this is New home</h4>
            <a href='/'>Home</a>
            <br />
            <Link to='nested-route'>Nested Route</Link>
            
            <Outlet />

            <div>
                <button onClick={() => {setSearchParams({filter: 'filter'}) }}>Search Params</button>
                <br />
                <button onClick={() => {setSearchParams() }}>Set Search Params</button>
            </div>
            {
                activeUser ? (<h4>this is filter</h4>) : (<h4>this is Not filter</h4>)
            }
        </div>
    )
}

export default Home
