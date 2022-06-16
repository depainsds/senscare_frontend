import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/home/common/login'
import Parents_signup from '../pages/home/common/parents_signup'
import Privacy_policy from '../pages/home/common/privacy_policy'
import Provider_signup from '../pages/home/common/provider_signup'
import Reset_password from '../pages/home/common/reset_password'
import Signup from '../pages/home/common/signup'
import Terms_condition from '../pages/home/common/terms_condition'
import Error from '../pages/home/error404'
import Home from '../pages/home/home'
import Thank_parents from '../pages/home/thank_parents'
import Thank_providers from '../pages/home/thank_providers'
import Welcome from '../pages/home/welcome_on_board'
import Landing_parents from '../pages/landing/landing_parents'
import Landing_providers from '../pages/landing/landing_providers'
import Landing_step2 from '../pages/landing/landing_step2'
import Emai_thank from '../pages/verified/emai_thank'
import Reset_email from '../pages/verified/reset_email_password'

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/landing' element={<Landing_step2 />} />
                    <Route exact path='/thanks_parents' element={<Landing_parents />} />
                    <Route exact path='/thanks_Providers' element={<Landing_providers />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup_provider' element={<Provider_signup />} />
                    <Route exact path='/signup_Parents' element={<Parents_signup />} />
                    <Route exact path='/parent_thankyou' element={<Thank_parents />} />
                    <Route exact path='/providers_thankyou' element={<Thank_providers />} />
                    <Route exact path='/welcome' element={<Welcome />} />
                    <Route exact path='/thank_you' element={<Emai_thank />} />
                    <Route exact path='/reset_password_mail' element={<Reset_email />} />
                    <Route exact path="/reset-password/:token/:id" element={<Reset_password />} />
                    <Route exact path="/privacy-policy" element={<Privacy_policy />} />
                    <Route exact path="/terms-of-use" element={<Terms_condition />} />

                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
