import React, { useState } from 'react'
import Footer from './common/footer'
import Header from './common/header'
import { Link } from 'react-router-dom'
import Promo_code from './common/promo_code'

function Home() {
    const [promo, setpromo] = useState('')
    return (
        <>
            <Header />
            {
                promo == "" ? <div className='promocode'>
                    <p ><Promo_code />
                        <button onClick={a => setpromo("hide")}>+</button>
                    </p>

                </div> : ''
            }

            <div className='container-fluid'>
                <div className='container'>
                    <div className='better_care'>
                        <h2>Better care. Better future.  </h2>
                        <div className='right_banner'>
                            <img src='./images/home_right.png' />
                        </div>
                        <div className='service_gurid'>
                            <div className='process_guid  dask'>
                                <ul>
                                    <li><Link to='#'>
                                        <img src='./images/profile.png' />
                                        <span>Create your profile</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/jobs.png' />
                                        <span>Apply for jobs</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/condidate.png' />
                                        <span>Search for candidates</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/team.png' />
                                        <span>Team up</span>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className='need_service'>
                                <Link to='/signup_Parents'><img src='./images/need_service.png' /><span>I need a service</span> </Link>
                                <p>Start your free search for child services in selected areas</p>
                            </div>
                            <div className='need_service need_job'>
                                <Link to='/signup_provider'><img src='./images/need_job.png' /><span>I need a job</span> </Link>
                                <p>Create a free profile and search for jobs</p>
                            </div>
                            <div className='process_guid  mobilenone mobile'>
                                <ul>
                                    <li><Link to='#'>
                                        <img src='./images/profile.png' />
                                        <span>Create your profile</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/jobs.png' />
                                        <span>Apply for jobs</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/condidate.png' />
                                        <span>Search for candidates</span>
                                    </Link></li>
                                    <li><Link to='#'>
                                        <img src='./images/team.png' />
                                        <span>Team up</span>
                                    </Link></li>
                                </ul>
                            </div>
                            {/* <div className='advertise'>
                                <Link to='#'><img src='./images/arrow_purpal.png' />
                                    <span>Advertise your company on our web site</span> </Link>
                            </div> */}
                        </div>

                    </div>
                    <div className='make_safe'>
                        <h3>Make a safe choice with the screening tools</h3>
                        <div className='left'>
                            <h4>Your screening tools <span>(recommended)</span></h4>
                            <ul className='first'>
                                <li>Review background</li>
                                <li>Read reviews and ratings </li>
                                <li>Conduct first interview via phone or video</li>
                                <li>Contact professional references</li>
                            </ul>
                            <ul className='second'>
                                <li><img src='./images/review.png' /></li>
                                <li><img src='./images/rating.png' /></li>
                                <li><img src='./images/interview.png' /></li>
                                <li><img src='./images/reference.png' /></li>
                            </ul>
                        </div>
                        <div className='middel'>
                            <img src='./images/make_banner.png' />
                        </div>
                        <div className='right left'>
                            <h4>Agency verification tools</h4>
                            <ul className='second'>
                                <li><img src='./images/phone.png' /></li>
                                <li><img src='./images/email.png' /></li>
                                <li><img src='./images/verification.png' /></li>
                                <li><img src='./images/criminal.png' /></li>
                            </ul>
                            <ul className='first'>
                                <li>Cell phone verification</li>
                                <li>Email verification</li>
                                <li>Facebook and LinkedIn verification</li>
                                <li>Criminal background verification </li>
                            </ul>

                        </div>
                        <p>For more details and tips please visit our <Link to='#'> Safety center. </Link></p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home
