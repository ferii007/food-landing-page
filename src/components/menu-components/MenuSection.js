
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import burgerImg from "./../../assets/img/food/burger.jpg";
import pizzaImg from "./../../assets/img/food/pizza.jpg";
import ramenImg from "./../../assets/img/food/ramen.jpg";

const MenuSection = () => {

    return(
        <section className="max-width-01">
            <div className="menu-content">
                <div className="menu-title">
                    <h5>OUR MENU</h5>

                    <h1>Menu That Always Makes You Fall In Love</h1>
                </div>

                <div className="our-menu">
                    <ul className="menu-categories">
                        <li>
                            <a href="#" className="list-menu">
                                <i>🍔</i>
                                <span>Burger</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu list-menu-active">
                                <i>🍕</i>
                                <span>Pizza</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🧁</i>
                                <span>Cupcake</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🍜</i>
                                <span>Ramen</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🍨</i>
                                <span>Ice Cream</span>
                            </a>
                        </li>



                        <li>
                            <a href="#" className="list-menu">
                                <i>🍔</i>
                                <span>Burger</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🍕</i>
                                <span>Pizza</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🧁</i>
                                <span>Cupcake</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🍜</i>
                                <span>Ramen</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="list-menu">
                                <i>🍨</i>
                                <span>Ice Cream</span>
                            </a>
                        </li>
                    </ul>

                    <div className="menu-food">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{ 
                                768: {
                                    slidesPerView: 'auto',
                                    pagination: false,
                                }
                             }}
                            className="mySwiper h-full"
                        >
                            <SwiperSlide>
                                <div className='food-list'>
                                    <img src={burgerImg} alt="Burger Pict" />

                                    <div className='food-text'>
                                        <h6>Burger</h6>
                                        <h5><span>$</span>6.49</h5>
                                        <a href='#'>
                                            Order Now
                                            <i className="ri-arrow-right-s-line text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='food-list'>
                                    <img src={ramenImg} alt="Burger Pict" />

                                    <div className='food-text'>
                                        <h6>Ramen</h6>
                                        <h5><span>$</span>5.49</h5>
                                        <a href='#'>
                                            Order Now
                                            <i className="ri-arrow-right-s-line text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='food-list'>
                                    <img src={pizzaImg} alt="Pizza Pict" />

                                    <div className='food-text'>
                                        <h6>Pizza</h6>
                                        <h5><span>$</span>7.49</h5>
                                        <a href='#'>
                                            Order Now
                                            <i className="ri-arrow-right-s-line text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default MenuSection