import { Helmet } from 'react-helmet-async';
import Category from "../Category/Category";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstractor from './PopularInstractor';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;