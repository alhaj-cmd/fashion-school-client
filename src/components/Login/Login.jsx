// import login from '../../assets/category/login.avif'
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className="bg-cover  h-60 bg-no-repeat bg-[url('login.avif')] ">
            {/* <img src={login} alt="" /> */}
            <form className="p-6 mx-auto text-center h-96" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label> <br />
                <input
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                /> <br />
                {errors?.firstName?.type === "required" && <p>This field is required</p>}
                {errors?.firstName?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                )} <br />
                {errors?.firstName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}
                <label>Laste Name</label> <br />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                {errors?.lastName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )} <br />
                <label>Age</label>a <br />
                <input {...register("age", { min: 18, max: 99 })} />
                {errors.age && (
                    <p>You Must be older then 18 and younger then 99 years old</p>
                )} <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;