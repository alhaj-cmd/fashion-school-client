import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import category2 from '../../assets/category/swipe-2.avif'
import category1 from '../../assets/category/swipe1.avif'
import category3 from '../../assets/category/swipe3.avif'
import category4 from '../../assets/category/swipe4.avif'
import category5 from '../../assets/category/swipe5.avif'
import category6 from '../../assets/category/swipe6.avif'
import category7 from '../../assets/category/swipe7.avif'
import category8 from '../../assets/category/swipe8.avif'
import category9 from '../../assets/category/swipe9.avif'
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <>
        <SectionTitle
        heading='Gellary'
        subHeading='Dispaly'

        ></SectionTitle>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide><img className="h-60"  src={category1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category7} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category8} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-60" src={category9} alt="" /></SwiperSlide>
      </Swiper>
        </>
    );
};

export default Category;