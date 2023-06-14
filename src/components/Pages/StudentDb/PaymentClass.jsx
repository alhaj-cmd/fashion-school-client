
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckOutForm from "./checkOutForm";
import { loadStripe } from "@stripe/stripe-js";

// 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gate);

const Payment = () => {
   
    return (
        <div className="w-full">
            <SectionTitle subHeading='The stripe process' heading='Payment'></SectionTitle>
        
        <div className="ml-4 mt-4">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
          </Elements>
        </div>
        </div>
    );
};

export default Payment;