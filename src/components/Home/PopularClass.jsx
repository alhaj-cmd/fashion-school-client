
import { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import ClassItem from './ClassItem';

const PopularClass = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('class.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])

    return (
        <section>
            <SectionTitle
            heading='Popular'
            subHeading='Classes'
            ></SectionTitle>
            <div className=" my-8  grid grid-cols-3 gap-4">
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