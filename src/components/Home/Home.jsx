import { Helmet } from 'react-helmet-async';
import Category from "../Category/Category";
import Banner from "./Banner";
import PopularClass from "./PopularClass";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;