import React from "react";
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    

    const onSubmit = (data, e) => {
        console.log(data)
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" ref={{
          ...register("name", {
            required: { value: true},
          }),
        }}
      />
      <div>
        {errors.name && <div>Este campo es requerido</div>}
      </div>
        <label>Username</label>
        <input type="text" name="username" ref={{
          ...register("username", {
            required: { value: true},
          }),
        }}
      />
      <div>
        {errors.username && <div>Este campo es requerido</div>}
      </div>
        <button>Add new user</button>
      </form>
     );
}
 
export default AddUserForm;