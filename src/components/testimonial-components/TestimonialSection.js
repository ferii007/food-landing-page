
import { LazyLoadImage } from 'react-lazy-load-image-component';

import testimonialImg from './../../assets/img/testimonials-img/testimonial.webp';
import customer1 from './../../assets/img/hero-img/cs-1.svg';

const TestimonialSection = () => {

    return(
        <section className="max-width-01">
            <div className="testimonial-content">
                <div className="relative w-full md:w-3/5 lg:w-2/5 xl:w-auto">
                    <LazyLoadImage effect="black-and-white" src={testimonialImg} alt="Our Testimonial Pict" className='w-full xl:w-11/12' />

                    <div className='testimonial-reviewers'>
                        <p>Our Reviewers</p>

                        <div className='reviewers-img'>
                            <img src={customer1} alt="Customer" />

                            <img src={customer1} alt="Customer" className='-ml-5' />

                            <img src={customer1} alt="Customer" className='-ml-5' />
                            <img src={customer1} alt="Customer" className='-ml-5' />
                        </div>
                    </div>
                </div>

                <div className='testimonial-desc'>
                    <h5>WHAT THEY SAY</h5>

                    <h1>What Our Customers Say About Us</h1>

                    <p>
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit beatae iure quia adipisci in quasi. Amet iste hic illo explicabo nemo doloribus cum iusto labore!"
                    </p>

                    <div className='testimonial-review'>
                        <div className='reviewer-info'>
                            <LazyLoadImage effect="black-and-white" src={customer1} alt="Customer" />

                            <div>
                                <p>Theresa Jordan</p>

                                <span>Food Enthusiast</span>
                            </div>
                        </div>
                        
                        <div className='reviewer-score'>
                            <i className="ri-star-fill text-yellow-500"></i>
                            <span> 4,8 </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default TestimonialSection