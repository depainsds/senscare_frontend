import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { api } from '../../../urls'
import { country } from './country';
const emailRegex = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const validPassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function Parents_signup() {
    const [category, setcategory] = useState('')
    const [describe, setdescribe] = useState({ tab: "Educatin" })
    const [stap, setstap] = useState("stap1")
    const [show, setShow] = useState(false);
    const [countrydata, setcountrydata] = useState(country.data)

    const describeselect = (a, b) => {
        if (Object.keys(describe).length < 3) {
            setdescribe({ ...describe, [a]: b })
        } else {
            delete describe[a];
            setdescribe({ ...describe, tab: "Educatin" })
        }
    }
    const redirect = () => {
        window.location.href = "/"
    }

    const [form_logins, setform_logins] = useState({
        username: "",
        email: "",
        password: "",
        c_password: "",
        service_type: "",
        first_name: "",
        last_name: "",
        dob: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        hearAboutUs: "",
        user_type: ""
    });
    const [error, seterror] = useState({
        username: "",
        email: "",
        password: "",
        c_password: "",
        service_type: "",
        first_name: "",
        last_name: "",
        dob: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        hearAboutUs: "",
    });

    const logins_field = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'username':
                error.username =
                    value.length < 2
                        ? "Minimum 2 characters required"
                        : "";
                break;
            case 'email':
                error.email =
                    emailRegex.test(value)
                        ? "" : "Email not valid.";

                break;
            case 'password':
                error.password =
                    validPassword.test(value) ? "" : "Demo@123"
                error.c_password =
                    value != form_logins.c_password
                        ? "Password not same."
                        : "";
                break;
            case 'c_password':
                error.c_password =
                    value != form_logins.password
                        ? "Password not same."
                        : "";
                break;
            case 'service_type':
                error.service_type =
                    value.length < 2
                        ? "Minimum 2 characters required"
                        : "";
                break;
            case 'first_name':
                error.first_name =
                    value.length < 2
                        ? "Minimum 2 characters required"
                        : "";
                break;
            case 'last_name':
                error.last_name =
                    value.length < 2
                        ? "Minimum 2 characters required"
                        : "";
                break;
            case 'dob':
                error.dob =
                    // (new Date().getFullYear() - parseInt(value)) > 16 ? "" : handleShow()
                    value.length < 2
                        ? "required"
                        : ""
                    ;
                break;
            case 'phone':
                error.phone =
                    value.length < 10
                        ? "required"
                        : "";
                break;
            case 'address':
                error.address =
                    value.length < 2
                        ? "required"
                        : "";
                break;
            case 'city':
                error.city =
                    value.length < 2
                        ? "required"
                        : "";
                break;
            case 'zip':
                error.zip =
                    value.length < 2
                        ? "required"
                        : "";
                break;
            case 'country':
                error.country =
                    value.length < 2
                        ? "required"
                        : "";
                break;
            case 'hearAboutUs':
                error.hearAboutUs =
                    value.length < 2
                        ? "required"
                        : "";
                break;
            default:
                break;
        }
        setform_logins({ ...form_logins, [name]: value })
        seterror(error)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const signup = () => {
        if (form_logins.username != '' & form_logins.email != '' & form_logins.password != '' & form_logins.c_password != '' & form_logins.first_name != '' & form_logins.last_name != '' & form_logins.dob != '' & form_logins.phone != '' & form_logins.address != '' & form_logins.city != '' & form_logins.zip != '' & form_logins.country != '' & form_logins.hearAboutUs != '') {
            if ((new Date().getFullYear() - parseInt(form_logins.dob)) > 16) {
                var formdata = new FormData();
                formdata.append("username", form_logins.username);
                formdata.append("email", form_logins.email);
                formdata.append("password", form_logins.password);
                formdata.append("c_password", form_logins.c_password);
                formdata.append("service_type", "1");
                formdata.append("first_name", form_logins.first_name);
                formdata.append("last_name", form_logins.last_name);
                formdata.append("dob", form_logins.dob);
                formdata.append("phone", form_logins.phone);
                formdata.append("address", form_logins.address);
                formdata.append("city", form_logins.city);
                formdata.append("zip", form_logins.zip);
                formdata.append("country", form_logins.country);
                formdata.append("hearAboutUs", form_logins.hearAboutUs);
                formdata.append("user_type", category);

                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };

                fetch(api + "/api/register", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            toast.success(result.message)
                            setTimeout(() => {
                                { category == "parents" || category == "school" ? window.location.href = "/parent_thankyou" : window.location.href = "/providers_thankyou" }
                            }, 2010);

                        } else {
                            toast.error("User signup unsuccessfully.")
                        }
                    })
                    .catch(error => {
                        toast.error("User signup unsuccessfully.")
                    });
            }
            else {
                handleShow()
            }
        }
        else {
            toast.error("All field Require.")
        }
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
                    <div className='signup_section'>
                        <div className='header_sign'>
                            <ul>
                                <li><Link to='/'><img src='./images/left_arrow.png' /> <span>Home</span> </Link></li>
                                <li className='login'><span>Already a member?</span> <Link to='/login'>Log In </Link></li>
                            </ul>
                        </div>

                        <div className={'more_about provider ' + (stap == "stap1" ? "" : "none")}>
                            <img src='./images/sign_logo.png' />
                            <h2>For a start, tell us who you are?</h2>
                            <p><span>I am</span>  (make your selection)</p>
                            <ul>
                                <li className={category == "parents" ? "active" : ""} onClick={e => setcategory("parents")}>
                                    <span>
                                        <img src={category == "parents" ? './images/parents_fill.png' : './images/parents.png'} />
                                        <h4>Parent</h4>
                                    </span>
                                </li>
                                <li className={category == "school" ? "active" : ""} onClick={e => setcategory("school")}>
                                    <span>
                                        <img src={category == "school" ? './images/school_fill.png' : './images/school.png'} />
                                        <h4>School</h4>
                                    </span>
                                </li>
                            </ul>
                            {category ? "" :
                                <button className='back_sign' onClick={redirect}>Back</button>}
                            <button onClick={e => {
                                category != '' ? setstap("stap2") : toast.error('Please select yourself.')
                            }}>Next</button>
                        </div>
                        <div className={'describe more_about ' + (stap == "stap2" ? "" : "none")}>
                            <img src='./images/sign_logo.png' />
                            <h2>What services do you need?</h2>
                            <p><span>I need </span> (Please select up to two professions) <br />Once you sign up, you can change your choice</p>
                            <div className='process_guid '>
                                <ul>
                                    <li className={describe && describe.tab1 == "Nanny" ? "active" : ""} onClick={e => describeselect("tab1", "Nanny")}><Link to="" >
                                        <img src={describe && describe.tab1 == "Nanny" ? './images/nanny_fill.png' : './images/nanny.png'} />
                                        <span>Nanny</span>
                                    </Link></li>
                                    <li className={describe && describe.tab2 == "teacher" ? "active" : ""} onClick={e => describeselect("tab2", "teacher")}><Link to="" >
                                        < img src={describe && describe.tab2 == "teacher" ? './images/teacher_fill.png' : './images/teacher.png'} />
                                        <span>Special Education Teacher</span>
                                    </Link></li>
                                    <li className={describe && describe.tab3 == "Educatin" ? "active" : ""} onClick={e => describeselect("tab3", "Educatin")}><Link to="" >
                                        <img src={describe && describe.tab3 == "Educatin" ? './images/education_fill.png' : './images/education.png'} />
                                        <span>Special Education Paraprofessional</span>
                                    </Link></li>
                                    <li className={describe && describe.tab4 == "Tutor" ? "active" : ""} onClick={e => describeselect("tab4", "Tutor")} > <Link to="" >
                                        <img src={describe && describe.tab4 == "Tutor" ? './images/tutor_fill.png' : './images/tutor.png'} />
                                        <span>Tutor</span>
                                    </Link></li>
                                </ul>
                            </div>
                            <button className='back_sign' onClick={e => setstap("stap1")}>Back</button>
                            <button onClick={e => {
                                Object.keys(describe).length >= 2 ? setstap("stap3") : toast.error('Please select your needs.')
                            }}>Next</button>
                        </div>

                        <div className={'describe more_about form_signup ' + (stap == "stap3" ? "" : "none")}>
                            <img src='./images/sign_logo.png' />
                            <h2>Tell us more about yourself</h2>
                            <form>
                                <div className='form_group'>
                                    <label>First Name*</label>
                                    <input type="text" placeholder='Type here' className={error.first_name == '' ? '' : "bordererror"} name='first_name' onChange={e => logins_field(e)} />
                                    <span className='errorfield'>{error.first_name}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Last Name*</label>
                                    <input type="text" placeholder='Type here' name='last_name' onChange={e => logins_field(e)} className={error.last_name == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.last_name}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Username*</label>
                                    <input type="text" placeholder='Type here' name='username' onChange={e => logins_field(e)} className={error.username == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.username}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Email address*</label>
                                    <input type="email" placeholder='Type here' name='email' onChange={e => logins_field(e)} className={error.email == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.email}</span>
                                </div>

                                <div className='form_group'>
                                    <label>Password*</label>
                                    <input type="password" placeholder='. . . . . . . . .' name='password' onChange={e => logins_field(e)} className={error.password == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.password}</span>
                                </div>

                                <div className='form_group'>
                                    <label>Repeat password*</label>
                                    <input type="password" placeholder='. . . . . . . . . . ' name='c_password' onChange={e => logins_field(e)} className={error.c_password == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.c_password}</span>
                                </div>

                                <div className='form_group'>
                                    <label>Date of birth*</label>
                                    <input type="date" placeholder='Type here' name='dob' onChange={e => logins_field(e)} className={error.dob == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.dob}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Mobile phone*</label>
                                    <input type="number" placeholder='Type here' name='phone' onChange={e => logins_field(e)} className={error.phone == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.phone}</span>
                                </div>
                                <div className='form_group'>
                                    <label>Address*</label>
                                    <input type="text" placeholder='Street name, House number' name='address' onChange={e => logins_field(e)} className={error.address == '' ? '' : "bordererror"} />
                                    <span className='errorfield'>{error.address}</span>
                                </div>
                                <div className='form_group part2'>
                                    <div className='citydetail'>
                                        <label>City*</label>
                                        <input type="text" placeholder='Type here' name='city' onChange={e => logins_field(e)} className={error.city == '' ? '' : "bordererror"} />
                                        <span className='errorfield'>{error.city}</span>
                                    </div>
                                    <div className='citydetail'>
                                        <label>Zip code*</label>
                                        <input type="number" placeholder='Type here' name='zip' onChange={e => logins_field(e)} className={error.zip == '' ? '' : "bordererror"} />
                                        <span className='errorfield'>{error.zip}</span>
                                    </div>
                                </div>
                                <div className='form_group'>
                                    <label>Country*</label>
                                    <select name='country' onChange={e => logins_field(e)} className={error.country == '' ? '' : "bordererror"}>
                                        <option ></option>
                                        {
                                            countrydata.map((e) => {
                                                return < option value={e.country} > {e.country}</option>
                                            })
                                        }
                                    </select>
                                    <span className='errorfield'>{error.country}</span>
                                </div>
                                <div className='form_group'>
                                    <label>How did you hear about us?*</label>
                                    <select name='hearAboutUs' onChange={e => logins_field(e)} className={error.hearAboutUs == '' ? '' : "bordererror"} >
                                        <option >Choose from the list</option>
                                        <option value={"Internet browsing "}>Internet browsing </option>
                                        <option value={"Friend recommendation"}>Friend recommendation</option>
                                        <option value={"Facebook"}>Facebook</option>
                                        <option value={"Our website"}>Our website </option>
                                        <option value={"Other"}>Other</option>

                                    </select>
                                    <span className='errorfield'>{error.hearAboutUs}</span>
                                </div>
                            </form>
                            <p>By clicking on “Sign up” you agree to our <Link to='/terms-of-use'>Terms of Use </Link> and <Link to='/privacy-policy'>Privacy Policy </Link>.</p>
                            <button className='back_sign' onClick={e => setstap("stap2")}>Back</button>
                            <button onClick={e => {
                                // handleShow()
                                signup()
                            }}><Link to="#"
                            // '/thank_you'
                            >Sign Up </Link></button>
                        </div>
                        <div className={'signupdetail ' + (stap == "stap1" || stap == "stap2" || stap == "stap3" ? "" : "none")} >
                            <h2>Sign Up <br /> for FREE!</h2>
                            <ul>
                                <li><img src='./images/thanks_right.png' /> <span>Add your job post.</span></li>
                                <li><img src='./images/thanks_right.png' /> <span>Browse a candidate's profile.</span></li>
                                <li><img src='./images/thanks_right.png' /> <span>Find an ideal candidate.</span></li>
                            </ul>
                        </div>

                    </div >
                </div >
            </div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='promocode_content younger'>
                        <Link to="" onClick={handleClose}>+ </Link>
                        <h5>Thank you!</h5>
                        <p>Thank you for your interest in the SensCare platform. Unfortunately, SensCare does not allow persons younger than 16 years to advertise on our website.</p>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Parents_signup
