import React, { useEffect, useState } from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import Add_testmonial from './add_testmonial';
import { api } from '../../../urls';



function Testimonials() {
    const sliderRef = useRef();
    const [count, setcount] = useState(false)
    const [testimonialdata, settestimonialdata] = useState([])
    const [reflect, setreflect] = useState([])

    useEffect(() => {
        if (!count) {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(api + "/api/testimonials", requestOptions)
                .then(response => response.json())
                .then(result => {
                    settestimonialdata(result.data)
                    setcount(true)
                    setTimeout(() => {
                        settestimonialdata(result.data)
                    }, 5000);
                    result.data.map((e) => reflect.push(e))
                    console.log(result.data);
                })
                .catch(error => console.log('error', error));
        }
    }, [count, testimonialdata, reflect])



    const testmonialdata = ((e, index) => {
        return (
            <div class="item" key={index}>
                <div className='profile_image'>
                    <img src={`https://admin.senscare.sdsstaging.co.uk/assets/images/testimonial/` + e.image} alt='profile' />
                </div>
                <div className='review'>
                    <span className='star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <Add_testmonial name={e.name} />
                    <p>{e.discription}</p>
                </div>
            </div>
        )
    })

    const cursoleslid = () => {
        return (
            testimonialdata && testimonialdata.map(testmonialdata)
        )
    }
    var settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings2: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings2: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <>
            <div className='container-fluid bggray'>
                <div className='container'>
                    <div className='testimonial_slid'>
                        <h2>Testimonials</h2>
                        <p>See what our clients think about using the SensCare platform.</p>
                        <Slider ref={sliderRef} {...settings2} id="Slider-4" className='slider_test'>
                            {cursoleslid()}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
