import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

function Add_testmonial(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <div className='testimonial_add'>
                <Link to='#' onClick={handleShow}>{props.name} </Link>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div className='promocode_content testimonial_adds'>
                            <Link to="" onClick={handleClose}>+ </Link>
                            <h2>Testimonials and Survey</h2>

                            <div className='add_test'>
                                <h3 className='border'>Thank you for being a valuable member of the SensCare community. Please, help us improve by taking part in a short survey</h3>
                                <h5>Please tell us about your experience so far</h5>
                                <div className='que1'>
                                    <p>Would you recommend SensCare to friends and family? </p>
                                    <span className='star'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>
                                </div>
                                <div className='que1'>
                                    <p>How will you rate the site navigation? </p>
                                    <span className='star'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>
                                </div>
                                <div className='que1 border'>
                                    <p>What additional services you would like to see on our website: </p>
                                    <div className='option'>
                                        <label><input type={"radio"} name="service" /><span> Cleaning</span></label>
                                        <label><input type={"radio"} name="service" /><span> Elderly care</span></label>
                                        <label><input type={"radio"} name="service" /><span> Pet care</span></label>
                                        <label><input type={"radio"} name="service" /><span> Other</span></label>
                                    </div>
                                    <div className='comment'>
                                        <textarea rows={2} cols={5} placeholder="Type here..." />
                                        <span>Number of characters 70</span>
                                    </div>
                                </div>
                                <div className='que1'>
                                    <p>Rate your overall impression with SensCare platform</p>
                                    <span className='star'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </span>
                                </div>
                                <div className='que1 border sec2'>
                                    <p>Write your review</p>
                                    <div className='comment'>
                                        <textarea rows={2} cols={5} placeholder="Type here..." />
                                        <span>Number of characters 70</span>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <button className='rest'>Send</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Add_testmonial
