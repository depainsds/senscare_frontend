import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { api } from '../../../urls'
const validPassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
function Reset_password() {
    const slugdata = useParams()
    const id = slugdata.id
    const token = slugdata.token
    const [form_logins, setform_logins] = useState({
        password: "",
        remember: false,
        c_password: ""
    });
    const [error, seterror] = useState({
        password: "",
        c_password: ""
    });

    const logins_field = (e) => {

        const { name, value } = e.target;
        switch (name) {

            case 'password':
                error.password =

                    validPassword.test(value) ? "" : "Demo@123";
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
            default:
                break;
        }
        setform_logins({ ...form_logins, [name]: value })
        seterror(error)
    }
    const resetemail = () => {
        if (form_logins.password != "" && form_logins.c_password != "") {
            var formdata = new FormData();
            formdata.append("id", id)
            formdata.append("token", token)
            formdata.append("password", form_logins.password)
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(api + "/api/changeresetpassword", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        toast.success(result.message)
                        setTimeout(() => {
                            window.location.href = "/"
                        }, 4000);
                    } else {
                        toast.error(result.message)
                    }
                })
                .catch(error => {
                    toast.error(error.message)
                });
        }
        else {
            toast.error("All field Require.")
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
            <div className='promocode_content reset reset2'>
                <div className="">
                    <h2>Reset Password</h2>
                    <form>
                        <div className='form_group'>
                            <label>Password</label>
                            <input type={"password"} placeholder=". . .  . . . . . . ." className={error.password == '' ? '' : "bordererror"} name='password' onChange={e => logins_field(e)} />
                            <span className='errorfield'>{error.password}</span>
                        </div>
                        <div className='form_group'>
                            <label>Confirm password</label>
                            <input type={"password"} placeholder=". . .  . . . . . . . " className={error.c_password == '' ? '' : "bordererror"} name='c_password' onChange={e => logins_field(e)} />
                            <span className='errorfield'>{error.c_password}</span>
                            {error.c_password || error.c_password ?
                                <div className='password_rule errorfield'>
                                    <h3>Passwords did not match.</h3>
                                    <p>Your password must be between 8-15 characters long and contain:<br />
                                        - at least one uppercase letter<br />
                                        - at least one number digit<br />
                                        - at least one special character -for example:  #, @, !</p>
                                </div> : ""}
                        </div>

                        <div className='rmfog'>
                            <label><input type={"checkbox"} /> <span>Remember me</span></label>
                        </div>
                        <div className='captch'>
                            <img src={window.location.origin + '/images/recaptcha.png'} />
                        </div>
                    </form>
                    <div className='buttons'>
                        <button className='rest' onClick={resetemail}>Reset password</button>
                        <button onClick={redirect}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reset_password
