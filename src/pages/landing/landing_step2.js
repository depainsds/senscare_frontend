import React from 'react'
import Footer from './common/footer'
import Header from './common/header'
import { Link } from 'react-router-dom'
import Landing_form from './common/landing_form'

function Landing_step2() {
    return (
        <>
            <Header />
            <div className='container-fluid border'>
                <div className='container'>
                    <div className='landing_page'>
                        <h2>The best child services marketplace is coming soon!</h2>
                        <div className='left_form'>
                            <p>Our team consists of professors, special education professionals, and international ABA therapists. The child care you need, the job you want.</p>
                            <div className='hire_because'>
                                <h4>Hire or Become</h4>
                                <ul>
                                    <li>
                                        <img src='./images/nany.png' alt='icon' />
                                        <span>Nanny</span>
                                    </li>
                                    <li>
                                        <img src='./images/special.png' alt='icon' />
                                        <span>Special education provider</span>
                                    </li>
                                    <li>
                                        <img src='./images/turor.png' alt='icon' />
                                        <span>Tutor</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='dask bgnon'>
                                <Landing_form />
                            </div>
                        </div>
                        <div className='right_section'>
                            <ul>

                                <li>
                                    <Link to='#' >
                                        <img src="./images/arrow.png" alt="icon" />
                                        <span>Meet SensCare Team</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' >
                                        <img src="./images/play.png" alt="icon" />
                                        <span>Visit SensCare platform</span>
                                    </Link>
                                </li>
                            </ul>
                            <img src='./images/landing.png' alt='banner' />
                        </div>
                        <div className='left_form'>

                            <div className='mobile'>
                                <Landing_form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing_step2
