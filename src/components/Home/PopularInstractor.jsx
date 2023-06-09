
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import InstractorItem from './InstractorItem';
import useInstractor from '../Hooks/useInstractor';

const PopularInstractor = () => {
    const [instractorItem] = useInstractor();
    return (
        <section>
            <SectionTitle
            heading='Popular'
            subHeading='Classes'
            ></SectionTitle>
            <div className=" my-8  grid md:grid-cols-2  gap-4">
                {
                  instractorItem.map(item => <InstractorItem 
                    key={item._id}
                  item={item}
                  ></InstractorItem>)  
                }
            </div>
          
            
        </section>
    );
};

export default PopularInstractor;