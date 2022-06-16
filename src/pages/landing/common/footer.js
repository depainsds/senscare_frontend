import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='footer bagf'>
                        <div className='social_media'>
                            <p>Follow us on</p>
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
                            <p>@2022 SensCare. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
