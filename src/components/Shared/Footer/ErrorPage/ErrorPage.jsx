import { Link } from 'react-router-dom'
import Error from '../../../../assets/banner/error.jpg'

const ErrorPages = () => {
    return (
        <section>

            <img className='w-full' src={Error} alt="Error image not found" />

            <div className='text-center -mt-16'>

                <Link to='/' className=' btn btn-error ' >
                    Click to Back
                </Link>
            </div>

        </section>
    );
};

export default ErrorPages;