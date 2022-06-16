import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './common/footer'
import Header from './common/header'

function Error() {
    return (
        <>
            <Header />
            <div className='container-fluid '>
                <div className='container'>
                    <div className='thank_page error'>
                        <h2>Oh snap! Error 404.</h2>
                        <div className='thanks'>
                            <p>Sorry! We couldn't find what  you are looking for.</p>
                            <Link to={"/"}><img src='./images/left_arrow_fill.png' /> <span>Please return to previous page</span></Link>
                        </div>
                        <img src='./images/error_img.png' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error
