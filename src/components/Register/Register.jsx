import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>This is Register</h3>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    <p>Already have an Accounts!! <Link className="text-blue-500" to='/signin'>Sign In</Link></p>
        </div>
    );
};

export default Register;