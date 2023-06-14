import { Fade } from 'react-awesome-reveal';
import Banner1 from '../../assets/banner/banner1.avif'
import Banner2 from '../../assets/banner/banner2.avif'
import Banner3 from '../../assets/banner/banner3.avif'
import Banner4 from '../../assets/banner/banner4.avif'


const Banner = () => {
    return (
        <>
        <h2 className='text-2xl text-center uppercase text-red-500'>--- Fashion Kids ----</h2>
            <div className=' grid grid-cols-2 gap-4 my-6'>
                <div className="card h-3/4  glass">
                    <figure><img   src={Banner1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ethereal Elegance</h2>
                        <Fade>
                        <p>Embrace the delicate beauty of Ethereal Elegance. This fashion collection showcases flowing silhouettes, soft pastel hues, and intricate lace detailing. Each piece exudes a sense of ethereal grace, transporting you to a realm of enchantment. Whether it is a billowing maxi dress, a sheer blouse...</p>
                        </Fade>
                    
                    </div>
                </div>
                <div className="card  h-3/4 glass">
                    <figure><img src={Banner2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Urban Chic</h2>
                      <Fade>
                      <p>Embrace the energy of the city with Urban Chic. This fashion collection embodies the modern metropolitan lifestyle, featuring sleek lines, monochromatic palettes, and contemporary silhouettes. From tailored blazers to tailored trousers, this collection offers a perfect ...</p>
                      </Fade>
                    </div>
                </div>
                <div className="card h-3/4   glass">
                    <figure><img src={Banner3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bohemian Rhapsody</h2>
                      <Fade>
                      <p>Let your free-spirited side shine with Bohemian Rhapsody. This fashion collection channels the carefree boho vibes, with flowing fabrics, earthy tones, and eclectic patterns. From embroidered tunics to fringe-adorned jackets, each piece celebrates individuality and self-expression...</p>
                      </Fade>
                    </div>
                </div>
                <div className="card h-3/4  glass">
                    <figure><img className='img-fluid' src={Banner4} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bold and Beautiful</h2>
                       <Fade>
                       <p>Make a statement with Bold and Beautiful. This fashion collection is all about embracing your confidence and expressing your unique personality. From vibrant colors to daring cuts,  Whether it is a striking evening gown, this collection is for those who are not afraid to push ...</p>
                       </Fade>
                    </div>
                </div>
               

            </div>
        </>
    );
};

export default Banner;