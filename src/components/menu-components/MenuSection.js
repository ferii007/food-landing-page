
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {menus} from '../../data/menus'
import { useState, useEffect } from 'react';

import { Pagination } from 'swiper';


const MenuSection = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductMenu(0, 'burgers')
    }, [])

    const getProductMenu = async (index, menuName) => {
        setActiveMenu(index);

        const response = await fetch(`https://tiny-blue-vulture-shoe.cyclic.app/${menuName}?_page=1&_limit=3`);
        const productsResponse = await response.json();
        setProducts(productsResponse)


        // fetch(`https://tiny-blue-vulture-shoe.cyclic.app/${menuName}?_page=1&_limit=3`)
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data)
        //     // setProducts(data)
        // });
    }

    return(
        <section className="max-width-01">
            <div className="menu-content">
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
                            {products.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className='food-list'>
                                        <LazyLoadImage effect="black-and-white" src={product.img} alt={product.dsc} />

                                        <div className='food-text'>
                                            <h6>{product.name}</h6>
                                            <h5><span>$</span>{product.price}</h5>
                                            <a href='#'  onClick={(e) => {
                                                e.preventDefault();
                                                alert('This feature not added yet')
                                            }}>
                                                Order Now
                                                <i className="ri-arrow-right-s-line text-xl"></i>
                                            </a>
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