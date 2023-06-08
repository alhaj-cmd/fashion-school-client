import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ClassItem = ({ item }) => {
    const { image, rating, name, instructor_name, available_seats, price } = item;
    return (
        <div className="card bg-[#ede9e0] glass">
            <figure><img className="h-48 w-full " src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <h2 className="font-semibold" >{instructor_name}</h2>

                <div className="flex">
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: ${price}</p>
                </div>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />

                <div className="card-actions justify-end">
                    <button className="btn btn-error">Learn now!</button>
                </div>
            </div>
        </ div>
    );
};

export default ClassItem;