import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { api } from '../../../urls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookProvider, LoginButton } from 'react-facebook';

const emailRegex = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
function Login() {
    const [showflogin, setShowflogin] = useState(false);
    const [showfprovider, setShowfprovider] = useState(false);
    const [showemail, setShowemail] = useState(false);
    const [form_logins, setform_logins] = useState({
        username: "",
        password: "",
        remember: false,
        resetemailadd: ""
    });
    const [error, seterror] = useState({
        username: "",
        password: "",
        resetemailadd: ""
    });

    const handleCloseemail = () => {
        setShowemail(false)
    };
    const handleCloselogin_first = () => {
        setShowflogin(false)
    };
    const handleCloselogin_firstprovider = () => {
        setShowfprovider(false)
    };
    const handleShowemail = () => {
        setShowemail(true)
    };
    const handleShowlogin_first = () => {
        setShowflogin(true)
    };
    const handleShowlogin_firstprovider = () => {
        setShowfprovider(true)
    };

    useEffect(() => {
        let x = localStorage.getItem("remember")
        console.log(JSON.parse(x))
        if (x != null) {
            setform_logins(JSON.parse(x))
        }
    }, [])

    const remember = (e) => {
        form_logins.remember = e.target.checked
        setform_logins(form_logins)
        if (form_logins.remember == true) {
            localStorage.setItem("remember", JSON.stringify(form_logins))
        } else {
            localStorage.clear()
        }
    }

    const logins_field = (e) => {

        const { name, value } = e.target;
        switch (name) {
            case 'username':
                error.username =
                    value.length < 6
                        ? "Minimum 6 characters required"
                        : "";
                break;
            case 'password':
                error.password =
                    value.length < 6
                        ? "Minimum 6 characters required"
                        : "";
                break;
            case 'resetemailadd':
                error.resetemailadd =
                    emailRegex.test(value) ? "" : "Email not valid.";
                break;
            default:
                break;
        }
        setform_logins({ ...form_logins, [name]: value })
        seterror(error)
        console.log(form_logins)
    }

    const login = () => {
        if (form_logins.username != "" && form_logins.password != "") {
            var formdata = new FormData();
            formdata.append("email", form_logins.username.toLocaleLowerCase());
            formdata.append("password", form_logins.password);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(api + "/api/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result.message)
                        { result.data.user.user_type == "parents" ? handleShowlogin_first() : handleShowlogin_firstprovider() }
                        console.log(result.data.user.user_type)
                    } else {
                        toast.error(result.message)
                        console.log(result)
                    }
                })
                .catch(error => {
                    toast.error("User logged unsuccessfully.")
                    console.log('error', error)
                });
        }
        else {
            toast.error("All field Require.")
            seterror({
                username: "Require",
                password: "Require"
            })
        }

    }

    const handleResponse = (data) => {
        console.log(data);
        setform_logins({ ...form_logins, username: data.profile.email })
    }

    const handleError = (error) => {
        console({ error });
    }


    const resetemail = () => {
        if (form_logins.resetemailadd != "") {
            var formdata = new FormData();
            formdata.append("email", form_logins.resetemailadd);
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(api + "/api/resetpassword", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result.message)
                        handleCloseemail()
                    }
                    else {
                        toast.error(result.message)
                        console.log(result)
                    }

                })
                .catch(error => {
                    toast.error("User logged unsuccessfully.")
                    console.log('error', error)
                });
        }
        else {
            toast.error("All field Require.")
            seterror({
                resetemailadd: "Require"
            })
        }
    }

    const redirect = () => {
        window.location.href = "/"
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
            <div className='container-fluid'>
                <div className='container'>
                    <div className='signup_section loginbg'>
                        <div className='header_sign'>
                            <ul>
                                <li><Link to='/'><img src='./images/left_arrow.png' /> <span>Home</span> </Link></li>
                                <li className='login'><span>Already a member?</span> <Link to='/login'>Log In </Link></li>
                            </ul>
                        </div>

                        <div className={'more_about login_form'}>
                            <img src='./images/sign_logo.png' />
                            <h2>Log In To Your Account</h2>
                            <form>
                                <div className='form_group'>
                                    <label>Username or Email</label>
                                    <input className={error.username == '' ? '' : "bordererror"} type={"text"} placeholder="Type hear" name='username' onChange={e => logins_field(e)} defaultValue={form_logins.username} />
                                    <span className='errorfield'>{error.username}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Password</label>
                                    <input className={error.username == '' ? '' : "bordererror"} type={"password"} placeholder=". . .  . . . . . . . " name='password' onChange={e => logins_field(e)} defaultValue={form_logins.password} />
                                    <span className='errorfield'>{error.password}</span>
                                </div>
                                <div className='rmfog'>
                                    <label><input type={"checkbox"} onClick={e => {
                                        remember(e)
                                    }} /> <span>Remember me</span></label>
                                    <Link to="" onClick={handleShowemail}>Forgot password? </Link>
                                </div>

                            </form>
                            <img src='./images/recaptcha.png' />
                            <button onClick={e => {
                                // handleShowlogin_first(),
                                login()
                            }}>Log In</button>
                            <span><span></span><p>Or Log In with</p></span>
                            <FacebookProvider appId="708887390341105">


                                <LoginButton
                                    scope="email"
                                    onCompleted={handleResponse}
                                    onError={handleError}
                                    className="facebook"
                                >
                                    <span><i class="fa-brands fa-facebook-f"></i> Log in with Facebook</span>
                                </LoginButton>
                            </FacebookProvider>
                            <Link to='#' className='indi'><i class="fa-brands fa-linkedin-in"></i> Log in with LinkedIn </Link>
                            <p>Don’t have an account? <Link to='/signup'>Sign Up </Link></p>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={showemail} onHide={handleCloseemail}>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
                <Modal.Body>
                    <div className='promocode_content reset_email reset'>

                        <Link to="" onClick={handleCloseemail}>+ </Link>
                        <h5>Reset Password</h5>
                        <p><span>Don't you worry, we’ve got your back!</span><br /> Enter your email address below and we will send you instructions to reset your password.</p>
                        <div className='form_group'>
                            <input type={"email"} className={error.resetemailadd == '' ? '' : "bordererror"} placeholder="example@emailprovider.com" name='resetemailadd' onChange={e => logins_field(e)} />
                            <span className='errorfield'>{error.resetemailadd}</span>
                        </div>
                        <div className='buttons'>
                            <button className='rest' onClick={resetemail}>Send</button>
                            <button onClick={handleCloseemail}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showflogin} onHide={handleCloselogin_first}>
                <Modal.Body>
                    <div className='promocode_content login_first'>
                        <Link to="" onClick={handleCloselogin_first}>+ </Link>
                        <h2>Complete your profile and find the perfect candidate</h2>
                        <img src='./images/landing.png' />
                        <p>Answer a few questions to help you find the candidates that are just right for you!</p>
                        <button onClick={redirect}>Complete Profile</button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showfprovider} onHide={handleCloselogin_firstprovider}>
                <Modal.Body>
                    <div className='promocode_content login_first'>
                        <Link to="" onClick={handleCloselogin_firstprovider}>+ </Link>
                        <h2>Complete your profile and get a perfect job</h2>
                        <img src='./images/landing.png' />
                        <p>Answer a few questions to make it easier to find jobs that are just made for you!</p>
                        <button onClick={redirect}>Complete Profile</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
