import { Helmet } from 'react-helmet-async';
import Category from "../Category/Category";
import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstractor from './PopularInstractor';
import Header from './Header';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion School | Home</title>
            </Helmet>
            <Header></Header>
            <Category></Category>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
            <Banner></Banner>
        </div>
    );
};

export default Home;