import Banner1 from '../../assets/banner/banner1.avif'
import Banner2 from '../../assets/banner/banner2.avif'
import Banner3 from '../../assets/banner/banner3.avif'
import Banner4 from '../../assets/banner/banner4.avif'


const Banner = () => {
    return (
        <>


            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={Banner1} alt="" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={Banner2} alt="" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={Banner3} alt="" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={Banner4} alt="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a  href="#item1" className="btn btn-sm bg-red-300 rounded-full"></a>
                <a href="#item2" className="btn btn-sm bg-red-500 rounded-full"></a>
                <a href="#item3" className="btn btn-sm bg-red-300 rounded-full"></a>
                <a href="#item4" className="btn btn-sm bg-red-500 rounded-full"></a>
            </div>
        </>
    );
};

export default Banner;