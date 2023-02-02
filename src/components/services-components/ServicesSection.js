
import { LazyLoadImage } from 'react-lazy-load-image-component';

import easyToOrderImg from "./../../assets/img/services-img/easy-to-order.png";
import fastestDeliveryImg from "./../../assets/img/services-img/fastest-delivery.png";
import bestQualityImg from "./../../assets/img/services-img/best-quality.png";


const ServicesSection = () => {

    return(
        <section className="max-width-01">
            <div className="services-content">
                <h5>WHAT WE SERVE</h5>

                <h1>Your Favourite Food Delivery Partner</h1>

                <div className="services">
                    <div>
                        <LazyLoadImage effect="black-and-white" src={easyToOrderImg} alt="Easy To Order Pict" />
                        <h2>Easy To Order</h2>

                        <p>You only need a few steps in ordering food</p>
                    </div>

                    <div>
                        <LazyLoadImage effect="black-and-white" src={fastestDeliveryImg} alt="Fastest Delivery Pict" />
                        <h2>Fastest Delivery</h2>

                        <p>Delivery that is always ontime even faster</p>
                    </div>

                    <div>
                        <LazyLoadImage effect="black-and-white" src={bestQualityImg} alt="Best Quality Pict" />
                        <h2>Best Quality</h2>

                        <p>Not only fast for us quality is also number one</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ServicesSection