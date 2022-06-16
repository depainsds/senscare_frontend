import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    const [menu, setmenu] = useState('close')
    console.log(props.login)
    return (
        <>
            <div className='container-fluid border'>
                <div className='container'>
                    <div className='header'>
                        <div className='search'>
                            <button ><img src='./images/search.png' /></button>
                        </div>
                        <div className='logo_main'>
                            <Link to='/'><img src='./images/logo.png' alt='logo' /> </Link>
                        </div>
                        <div className='mobileicon'>
                            <button onClick={e => setmenu('open')}><img src='./images/menuicon.png' /></button>
                        </div>
                        <div className='menu'>
                            <ul>
                                <li><Link to='/'>Home </Link></li>
                                {props.login ?
                                    <>
                                        <li ><Link to='/signup'>Educational Store <img src='./images/done_a.png' /></Link></li>
                                        <li ><Link to='/signup'>Child Services Directory <img src='./images/done_a.png' /></Link></li>
                                    </>
                                    : <li><Link to='#'>Blog </Link></li>}



                                <li className='signup'><Link to='/signup'>Sign Up </Link></li>
                                <li className='login'><Link to='/login'>Log In </Link></li>
                                <li className='lang'>
                                    <select>
                                        <option>ENG </option>
                                    </select>
                                    <img src='./images/eng.png' />
                                </li>
                            </ul>
                        </div>
                        <span className={'menu mobilem shadow ' + menu}></span>
                        <div className={'menu mobilem ' + menu}>
                            <button onClick={e => setmenu('close')}><img src='./images/cross.png' /></button>
                            <ul>
                                <li className='border'><Link to='/'>Home </Link></li>
                                <li className='border'><Link to='#'>Blog </Link></li>
                                <li className='lang'>
                                    <select>
                                        <option>ENG </option>
                                    </select>
                                    <img src='./images/eng.png' />
                                </li>
                                <li className='signup'><Link to='/signup'>Sign Up </Link></li>
                                <li className='login'><Link to='/login'>Log In </Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
