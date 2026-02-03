import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Pagination } from 'swiper/modules';
import { c1, c2, c3 } from '../assets/portfolio';

const Carousel = () => {
    return (<div id='rm-carousel-wrapper'>
        <Swiper spaceBetween={16} slidesPerView={1} loop navigation={true} modules={[Pagination]} pagination={{
            dynamicBullets: true
        }}>
            <SwiperSlide><img src={c1} /></SwiperSlide>
            <SwiperSlide><img src={c2} /></SwiperSlide>
            <SwiperSlide><img src={c3} /></SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Carousel;