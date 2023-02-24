import React from 'react';

const Navbar = () => {
    return (

        <div className="navbar sticky z-30 top-0 bg-yellow-600 px-10 py-5 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">DOG FOOD</a>
            </div>
            <div className="navbar-end ">
                <a target='_blank' className="btn btn-success btn-xs" href='https://l.facebook.com/l.php?u=https%3A%2F%2Famzn.to%2F3Yt0dxT%3Ffbclid%3DIwAR2aFRAS77jE-6xemw8AQr9fk250mCxaNnEqk1pUCHfXuNVoir30rC-P_bU&h=AT1waUe_n4W9QFzRbu5eDKEY49Zc_RGo2KKWJrFD0R61ZYVLqJE9MWphAZd5KgOxbUijZqKanRjhzkgAVlfSv-7rCdf0Gh8TZ7S55FnwsICe9WTIoJrnJd1_EEDTFtsB4GqfHg'>Order Now</a>
            </div>

        </div>
    );
};

export default Navbar;