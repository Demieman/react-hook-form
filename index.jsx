
import { useForm } from "react-hook-form";
function Reacthook() {
   const { register, 
   handleSubmit,
   formState: { errors },} = useForm();
  
    function onSubmitForm(formData) {
      console.log(formData);
    }
    return (
      <div>
        <h1>react hook form</h1>
        
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <label htmlFor="">Email</label>
            <input
              {...register('email', { 
              required: true 
              })}
              name="email"
              type="email"
            />
            {errors.email && errors.email.type === 'required' ? (
              <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>
                email is required
              </p>
            ) : null}
          </div>
  
          <div>
            <label>password</label>
            <input
              {...register('password', {
                required: true,
                minLength: 8,
              })}
              type="password"
              name="password"
               />
            {errors.password && errors.password.type === 'required' ? (
              <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>
                password is required
              </p>
            ) : null}
            {errors.password && errors.password.type === 'minLength' ? (
              <p style={{ color: 'red', fontWeight: 'bolder', margin: '20px' }}>
                password should be 8 characters
              </p>
            ) : null}
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
  
  export default Reacthook;