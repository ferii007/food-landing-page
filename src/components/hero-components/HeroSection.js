
import { LazyLoadImage } from 'react-lazy-load-image-component';

import heroImg from './../../assets/img/hero-img/hero-img.webp';
import customer1 from './../../assets/img/hero-img/cs-1.svg';
import heroPizza from'./../../assets/img/hero-img/hero-pizza.png';

const HeroSection = () => {

    return(
        <section className="max-width-01 lg:h-screen xl:h-auto">
            <div className="hero-content">
                <div className="hero-desc">
                    <h1 className="hero-title">
                        Claim Best Offer on Fast <span>Food</span> & <span>Restaurants</span>
                    </h1>

                    <p className='hero-sub-title'>
                        Our job is to filling your tummy with delicious food and with fast and free delivery
                    </p>

                    <div className='hero-btn'>
                        <span className='hero-get-started-btn' onClick={(e) => {
                            e.preventDefault();
                            alert('This feature not added yet')
                        }}>
                            Get Started
                        </span>

                        <div className='hero-watch-video-btn' onClick={() => alert('This feature not added yet')}>
                            <div className='play-btn'>
                                <i className="ri-play-fill"></i>
                            </div>

                            <span>Watch Video</span>
                        </div>
                    </div>

                    <div className='hero-customers'>
                        <div className='flex'>
                            <img src={customer1} alt="Customer" />
                            <img src={customer1} alt="Customer" className='-ml-5' />
                            <img src={customer1} alt="Customer" className='-ml-5' />
                        </div>

                        <div>
                            <p className='font-semibold'>Our Happy Customer</p>

                            <div className='flex gap-1 items-center'>
                                <i className="ri-star-fill text-yellow-500"></i>
                                <span className='font-medium'> 4,8 </span>
                                <span className='text-[#828282]'> (12.5k Review) </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="hero-img">
                    <LazyLoadImage effect="black-and-white" src={heroImg} alt="Food" className='w-full' />

                    <div className='clock-icon'>
                        <i className="ri-time-line"></i>
                    </div>

                    <div className='food-courier-card'>
                        <div className='courier-food-img'>
                            <span>🧑</span>
                        </div>

                        <div className='w-1/2'>
                            <p className='font-medium'>John Doe</p>
                            <p className='font-medium text-sm text-[#828282]'>Food Courier</p>
                        </div>

                        <div className='courier-food-phone'>
                            <i className="ri-phone-line"></i>
                        </div>
                    </div>

                    <div className='food-recommended'>
                        <img src={heroPizza} alt="Pizza" />

                        <div>
                            <p className='font-semibold'>Italian Pizza</p>
                            <i className="ri-star-fill text-yellow-500"></i>
                            <p className='font-bold text-lg'><span className='text-colorSecondary text-xs'>$</span>7.49</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSection