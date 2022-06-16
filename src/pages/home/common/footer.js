import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const [fmenu, setfmenu] = useState()
    return (
        <>
            <div className='container-fluid dask'>
                <div className='footer'>
                    <div className='head'>
                        <div className='container'>
                            <ul>
                                <li>Contact</li>
                                <li>About</li>
                                <li>Resources</li>
                                <li>legal</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='footer_menu'>
                            <ul>
                                <li><Link to='#'>Contact us</Link></li>
                                <li><Link to='#'>Work with us</Link></li>
                                <li><Link to='#'>Career</Link></li>
                                <li><Link to='#'>Investor Relation</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>About SensCare</Link></li>
                                <li><Link to='#'>FAQ</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>Resources for parents</Link></li>
                                <li><Link to='#'>Safety center</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='#'>Terms of use</Link></li>
                                <li><Link to='#'>Privacy policy</Link></li>
                                <li><Link to='#'>Cookies policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='bottom'>
                        <ul>
                            <li>© 2022 SensCare. All Rights Reserved.</li>
                            <li>
                                <ul>
                                    <li>
                                        <Link to='#'>
                                            <img src='./images/facebook.png' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            <img src='./images/indi.png' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            <img src='./images/twiter.png' />
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='#'><img src='./images/app_store.png' /></Link>
                            </li>
                            <li>
                                <Link to='/'><img src='./images/logo.png' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container-fluid mobilef'>
                <div className='footer'>

                    <div className='container'>
                        <div className='footer_menu'>
                            <h4 id='fm1' onClick={a => setfmenu('fm1')}>Contact <img src='./images/down_arrow.png' /></h4>
                            <ul className={fmenu == 'fm1' ? "show" : "hide"}>
                                <li><Link to='#'>Contact us</Link></li>
                                <li><Link to='#'>Work with us</Link></li>
                                <li><Link to='#'>Career</Link></li>
                                <li><Link to='#'>Investor Relation</Link></li>
                            </ul>
                            <h4 id='fm2' onClick={a => setfmenu('fm2')}>About <img src='./images/down_arrow.png' /></h4>
                            <ul className={fmenu == 'fm2' ? "show" : "hide"}>
                                <li><Link to='#'>About SensCare</Link></li>
                                <li><Link to='#'>FAQ</Link></li>
                            </ul>
                            <h4 id='fm3' onClick={a => setfmenu('fm3')}>Resources <img src='./images/down_arrow.png' /></h4>
                            <ul className={fmenu == 'fm3' ? "show" : "hide"}>
                                <li><Link to='#'>Resources for parents</Link></li>
                                <li><Link to='#'>Safety center</Link></li>
                            </ul>
                            <h4 id='fm4' onClick={a => setfmenu('fm4')}>legal  <img src='./images/down_arrow.png' /></h4>
                            <ul className={fmenu == 'fm4' ? "show" : "hide"}>
                                <li><Link to='#'>Terms of use</Link></li>
                                <li><Link to='#'>Privacy policy</Link></li>
                                <li><Link to='#'>Cookies policy</Link></li>
                            </ul>

                        </div>
                        <div className='bottom2 '>
                            <ul>
                                <li>
                                    <Link to='/'><img src='./images/white_logo.png' /></Link>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <Link to='#'>
                                                <img src='./images/whitefb.png' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img src='./images/whitein.png' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img src='./images/whitetwiter.png' />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='#'><img src='./images/app_store.png' /></Link>
                                </li>
                                <li>© 2022 SensCare. All Rights Reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
