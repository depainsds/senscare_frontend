import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
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
        </>
    )
}

export default Footer
