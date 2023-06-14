import { Fade } from 'react-awesome-reveal';
import {  FaMale } from 'react-icons/fa';

const InstractorItem = ({item}) => {
    const {name, image, student, details}  = item;
    return (
        <div>
             <div className="flex space-x-2 h-52">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[150px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name} -----------</h3>
              <Fade>
              <p>{details}</p>
              </Fade>
            </div>
            <p className="flex"><span className='text-red-400 font-bold'><FaMale /></span>{student}</p>
        </div>
        </div>
    );
};

export default InstractorItem;