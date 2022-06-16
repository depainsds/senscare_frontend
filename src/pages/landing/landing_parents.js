import React from 'react'
import Footer from './common/footer'
import Header from './common/header'
import { Link } from 'react-router-dom'

function Landing_parents() {
    return (
        <>
            <Header />
            <div className='container-fluid border'>
                <div className='container'>
                    <div className='thank_page '>
                        <h2>Thank You for Joining SensCare! </h2>
                        <div className='thanks'>
                            <h4>Together we create the future.</h4>
                            <ul>
                                <li><img src='./images/thanks_right.png' /> <span>Children's services in one place.</span></li>
                                <li><img src='./images/thanks_right.png' /> <span>Fast, quality and safe services.</span></li>
                                <li><img src='./images/thanks_right.png' /> <span>Wide selection of qualified providers <br />(domestically and internationally).</span></li>

                            </ul>
                            <h3>Stay tuned, we are coming soon!</h3>
                        </div>
                        <img src='./images/thank_banner.png' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing_parents
