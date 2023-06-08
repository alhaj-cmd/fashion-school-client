import Category from "../Category/Category";
import Banner from "./Banner";
import PopularClass from "./PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;