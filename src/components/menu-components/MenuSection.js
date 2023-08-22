
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {menus} from '../../data/menus'
import { useState, useEffect } from 'react';

import { Pagination, Navigation } from 'swiper';


const MenuSection = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProductMenu(0, 'burgers')
    }, [])

    const getProductMenu = async (index, menuName) => {
        setActiveMenu(index);
        const targetMenu = menus.find(menu => menu.param === menuName);

        setProducts(targetMenu.products)
    }

    return(
        <section className="max-width-01">
            <div className="menu-content relative">
                <div className="menu-title">
                    <h5>OUR MENU</h5>

                    <h1>Menu That Always Makes You Fall In Love</h1>
                </div>

                <div className="our-menu">
                    <ul className="menu-categories">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <p href="#" className={`list-menu ${index === activeMenu ? 'list-menu-active' : ''}`} onClick={() => getProductMenu(index, menu.param)}>
                                    <i>{menu.icon}</i>
                                    <span>{menu.name}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="menu-food">
                        <Swiper
                            pagination={{ clickable: true }}
                            navigation={true} 
                            modules={[Pagination, Navigation]}
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
                            {products.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className='food-list'>
                                        <LazyLoadImage effect={isLoading ? 'blur' : 'opacity'} className={`food-img`} src={product.img} alt={product.name} onLoad={() => setIsLoading(false)} />

                                        <div className='food-text'>
                                            <h6>{product.name}</h6>
                                            <h5><span>$</span>{product.price}</h5>
                                            <span className='order-btn'  onClick={(e) => {
                                                e.preventDefault();
                                                alert('This feature not added yet')
                                            }}>
                                                Order Now
                                                <i className="ri-arrow-right-s-line text-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default MenuSection