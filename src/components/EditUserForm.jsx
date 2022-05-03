import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: { value: true } })}
      />
      <div>{errors.name && <div>Este campo es requerido</div>}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", { required: { value: true } })}
      />
      <div>{errors.username && <div>Este campo es requerido</div>}</div>
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
