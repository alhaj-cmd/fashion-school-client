import { Fade } from 'react-awesome-reveal';
import Banner1 from '../../assets/banner/banner1.avif'
import Banner2 from '../../assets/banner/banner2.avif'
import Banner3 from '../../assets/banner/banner3.avif'
import Banner4 from '../../assets/banner/banner4.avif'


const Banner = () => {
    return (
        <>


            <div className=' grid grid-cols-2 gap-4 my-6'>
                <div className="card  glass">
                    <figure><img src={Banner1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ethereal Elegance</h2>
                        <p>Embrace the delicate beauty of Ethereal Elegance. This fashion collection showcases flowing silhouettes, soft pastel hues, and intricate lace detailing. Each piece exudes a sense of ethereal grace, transporting you to a realm of enchantment. Whether it is a billowing maxi dress, a sheer blouse, or a dreamy tulle skirt, this collection offers timeless elegance with a touch of whimsy.</p>
                        <Fade>
      <p>I am an animated text</p>
    </Fade>

                        <button className="btn no-animation">Ethereal Elegance</button>

                    </div>
                </div>
                <div className="card  glass">
                    <figure><img src={Banner2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Urban Chic</h2>
                        <p>Embrace the energy of the city with Urban Chic. This fashion collection embodies the modern metropolitan lifestyle, featuring sleek lines, monochromatic palettes, and contemporary silhouettes. From tailored blazers to tailored trousers, this collection offers a perfect balance of sophistication and edginess. With its urban-inspired prints and avant-garde accessories, Urban Chic is designed for the fashion-forward individuals who seek to make a statement on the streets.</p>
                        <button className="btn no-animation">Urban Chic</button>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img src={Banner3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bohemian Rhapsody</h2>
                        <p>Let your free-spirited side shine with Bohemian Rhapsody. This fashion collection channels the carefree boho vibes, with flowing fabrics, earthy tones, and eclectic patterns. From embroidered tunics to fringe-adorned jackets, each piece celebrates individuality and self-expression. Whether you are strolling through a summer festival or enjoying a cozy bonfire night, Bohemian Rhapsody offers a harmonious blend of comfort and style.</p>
                        <button className="btn no-animation">Bohemian Rhapsody</button>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img src={Banner4} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bold and Beautiful</h2>
                        <p>Make a statement with Bold and Beautiful. This fashion collection is all about embracing your confidence and expressing your unique personality. From vibrant colors to daring cuts, each piece in this collection is designed to empower and captivate. Whether it is a striking evening gown, a tailored jumpsuit, or a bold animal print coat, this collection is for those who are not afraid to push boundaries and stand out from the crowd. Get ready to turn heads and leave a lasting impression with Bold and Beautiful.</p>
                        <button className="btn no-animation">Bold and Beautiful</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;