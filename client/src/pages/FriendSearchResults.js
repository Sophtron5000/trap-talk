import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/traptalk-transparent.png';

function FriendSearch() {
    return (
        <div class="navbar bg-base-100">
             <div class="flex-1">
                <button className="btn btn-ghost" onClick={<Link to='/messages'></Link>}><img alt='logo' className='h-16' src={logo}></img></button>
            </div>
            <div>
                <button className="btn btn-ghost">Search for Friends</button>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-96" />
                </div>
                <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/profile">Profile</Link></li>
                    <button className="btn btn-ghost"><li>Logout</li></button>
                </ul>
            </div>
            </div>
        </div>
    )
};

export default FriendSearch;