
// import { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import ClassItem from './ClassItem';
import useHook from '../Hooks/useHook';

const PopularClass = () => {

    const [menu] = useHook();
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('class.json')
    //     .then(res => res.json())
    //     .then(data => setMenu(data))
    // },[])

    return (
        <section>
            <SectionTitle
            heading='Popular'
            subHeading='Classes'
            ></SectionTitle>
            <div className=" my-8  grid md:grid-cols-3  gap-4">
                {
                  menu.map(item => <ClassItem key={item._id}
                  item={item}
                  ></ClassItem>)  
                }
            </div>
            
        </section>
    );
};

export default PopularClass;